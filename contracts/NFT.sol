// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract NFT is ERC1155 {
    constructor() ERC1155("URL") {
        _mint(msg.sender, 0, 1, "");
    }
}
