// Objects part-2

// Singleton

// two types to declere Object

// ---->1st
// const tinderUser1 = {} // {} - - - - - -> NON - Singleton
// console.log(tinderUser1);

//----->2nd
// const tinderUser2 = new Object() - - - - - -> Singleton
// console.log(tinderUser2); // {}


const tinderUser = {}

tinderUser.ID = "CDV0033"
tinderUser.name = "Jony"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
const regularUser = {
    email: "jony@gmail.com ",
    fullName: {
        userInformation: {
            firstName: "jony",
            lastName: "bhai"
        }
    }
}
// console.log(regularUser.fullName.userInformation);

// mearge Objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj = {...obj1, ...obj2} // spred method - - -> add two Objects
// console.log(obj);


const obj3 = Object.assign( {}, obj1, obj2) 
// console.log(obj3);


// Array of Objects
const Users = [
    {
        id: 1,
        email: "a@gmai.com"
    },
    {
        name: "jone",
        age: 25
    }
]
// console.log(Users[1].name);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
