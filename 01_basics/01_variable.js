const accountId = 2003
let accountEmail = "akash123@gmail.com"
var accountPassword = "0215"
accountCity = "pune"
let accountState; // --> undefined

//accountId = 2 //not allowed

 accountEmail = "abcd@.com"
 accountPassword = "1234"
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
/*
prefer not to use var
becouse of issue in block scope and functional scope
*/