// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyERC20 is ERC20 {
    constructor() ERC20("Web3 Online Judge Token", "WEB3OJT") {
        _mint(msg.sender, 2000000000 * 1000000000000000000);
    }
}
