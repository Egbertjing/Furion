// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "../tokens/interfaces/IFFT.sol";
import "./interfaces/IFurionOracle.sol";
import "../project-pool/interfaces/IProjectPoolFactory.sol";
// For F-* token
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

// In this contract, pools refer to root pools and tokens refer to project pool
// tokens (i.e. project pools)

contract RootPool {
    IFFT FFT;
    IFurionOracle Oracle;

    address public immutable factory;
    // Will be immutable for income sharing vault
    address public owner;

    // Accepted pool tokens for this root pool
    mapping(address => bool) registered;
    // Access all tokens for calculating sum of F-* reference price
    // ID to token address
    mapping(uint256 => address) getToken;

    // 0 - 100
    uint64 public stakeFeeRate = 1;
    uint64 public unstakeFeeRate = 3;
    // Serves as ID for F-* tokens in this pool
    uint128 public tokenTypes;

    constructor(
        address _fft,
        address _oracle,
        address _owner,
        address[] memory _tokens
    ) {
        factory = msg.sender;
        FFT = IFFT(_fft);
        Oracle = IFurionOracle(_oracle);
        owner = _owner;

        // Checked support at factory, register tokens upon pool creation
        for (uint256 i = 0; i < _tokens.length; ) {
            registered[_tokens[i]] = true;
            getToken[i] = _tokens[i];

            unchecked {
                ++i;
            }
        }

        tokenTypes = uint128(_tokens.length);
    }

    modifier onlyFactory() {
        require(msg.sender == factory, "RootPool: Not permitted to call.");
        _;
    }

    // Make sure pool is only for registered F-* token
    modifier tokenRegistered(address _tokenAddress) {
        require(
            registered[_tokenAddress] == true,
            "RootPool: Token not accepted in this pool."
        );
        _;
    }

    modifier checkBalance(address _tokenAddress, uint256 _amount) {
        require(
            IERC20(_tokenAddress).balanceOf(msg.sender) >= _amount,
            "RootPool: You don not have enough tokens."
        );
        require(
            IERC20(_tokenAddress).allowance(msg.sender, address(this)) >=
                _amount,
            "RootPool: Not enough amount of tokens approved."
        );
        _;
    }

    /**
     * @dev Change pool admin/fee receiver
     */
    function changeOwner(address _newOwner) external onlyFactory {
        owner = _newOwner;
    }

    /**
     * @dev Add F-* token to pool

    function registerToken(address _tokenAddress) external onlyFactory {
        registered[_tokenAddress] = true;
        numOfTokens++;
    }
    */

    /**
     * @dev Stake F-* tokens and mint FFT
     *
     * @param _tokenAddress Address of F-* token to stake
     * @param _amount Amount of F-* tokens to stake
     */
    function stake(address _tokenAddress, uint256 _amount)
        external
        tokenRegistered(_tokenAddress)
        checkBalance(_tokenAddress, _amount)
    {}

    /**
     * @dev Burn FFT and get F-* tokens
     *
     * @param _tokenAddress Address of F-* token to get
     * @param _amount Amount of FFT to burn
     */
    function unstake(address _tokenAddress, uint256 _amount)
        external
        tokenRegistered(_tokenAddress)
        checkBalance(address(FFT), _amount)
    {}

    /**
     * @dev Get total value of staked F-* tokens in contract (in ETH)
     */
    function _totalRefPrice() private view returns (uint256) {
        uint256 total;

        for (uint256 i = 0; i < tokenTypes; ) {
            address token = getToken[i];
            address nft = IProjectPoolFactory(factory).getNft(token);

            // Price of 1000 F-* tokens in terms of ETH
            uint256 refPrice = Oracle.getNFTPrice(nft, 0);
            // Number of F-* tokens in the contract
            uint256 balance = IERC20(token).balanceOf(address(this));

            total += (refPrice / 1000) * balance;
        }

        return total;
    }
}
