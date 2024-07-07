/*
Prefer not to use var 
because of issue in block scope and functional scope
 */

const accountId = 748905;
let accountEmail = "shubham@gmail.com";
var accountPassword = "12345";
accountCity = "Rajnandgaon";
let accountState;

// accountId = 2;

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])