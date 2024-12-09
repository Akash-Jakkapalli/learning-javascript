// < , >, <=, >=, ==, !=
// === -> it will check type also

// if

// if (2 === "2") {
//     console.log("True");  
// } else {
//     console.log("false");
// }


// const score = 500
// if (score > 100) {
//     let power = "GO FAST"
//     console.log(`Your power : ${power}`);
// }
// console.log(`Your power : ${power}`); // var -> is a global variable 


const userLoggedIn = true
const debitCard = true

const loggedInFormGoogle = false
const loggedInFormEmail = true

// if (userLoggedIn && debitCard && 2==2) {
//     console.log("Allow to buy products");  
// }else{
//     console.log("not allow to buy any products");
// }

if (loggedInFormGoogle || loggedInFormEmail) {
    console.log("User logged in ");
    
}