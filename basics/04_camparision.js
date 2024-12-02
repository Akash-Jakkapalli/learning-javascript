// console.log(2>1);


const Id = Symbol('123')
const anotherId = Symbol('123')

//console.log(Id === anotherId);

// array, objects,functions

//array
const Numbers = [1, 2, 3, 4, 5];

//obj
let myObj = {
    name: "akash",
    age: 19
}

//funtions
const myFunction = function() {
    console.log("akash");
}



//-------------------------------------------------------

// memory type 
// 1st stack -> (primitive)
// 2nd heap -> (Non-primitive)


let myname = "Akash"

let anotherName = myname
anotherName = "SKY"

console.log(myname)
console.log(anotherName);

let userOne = {
    email: "google@.com",
    upi: "user@hdfc"
}

let userTwo = userOne

userTwo.email = "akash@gmail.com"

console.log(userTwo);
