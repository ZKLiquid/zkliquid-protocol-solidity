// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.20;

import "@openzeppelin/contracts/proxy/utils/Initializable.sol";
import "./common/AccessControl.sol";
import "./common/Utils.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

contract Chai is Utils {
    struct Memo {
        string name;
        string message;
        uint timestamp;
        address from;
    }

    Memo[] memos;
    address payable owner; // owner is going to receive funds
    address payable receiver;
    address tokenAddress;

    constructor(address _receiver, address _tokenAddress) {
        owner = payable(msg.sender);
        receiver = payable(_receiver);
        tokenAddress = _tokenAddress;
    }

    function buyChai(uint tokenAmount) external payable {
        require(tokenAmount > 0, "Please amount cannot be zero");

        if (tokenAddress != address(0)) {
            _takeAsset(tokenAddress, msg.sender, tokenAmount);
        }

        _sendAsset(tokenAddress, receiver, tokenAmount);
    }

    function getMemos() public view returns (Memo[] memory) {
        return memos;
    }
}
