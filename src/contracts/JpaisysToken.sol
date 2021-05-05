// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "../../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract JpaisysToken is ERC20("JpaisysToken", "JPAISYS") {

   constructor() public {
     _mint(msg.sender, 1000);
    }
    
}