//Objects part-1

// Singleton
// Object.creat



// Object Literals - - ->

const mySym = Symbol("key1")

const user = {
    name:"akash",
    "full Name" : "Akash Jakkapalli",
    [mySym]: "key2",
    age: 19,
    email: "akash@google.com",
    lastLoggedIn: ["monday", "Saturday"]
}
const marks = {
    math: 99,
    phy: 90,
    chem: 85
}

// console.log(typeof mySym);

// console.log(user["name"]);
// console.log(user["full Name"]);


const userInfo = Object.assign(user,marks)
// console.log(userInfo);

// console.log(userInfo === user); //true

const myInfo = {
    myName: "akash",
    age: 19,
    status: "student",
    collage: "PU",
    email: "akash@goohle.com"
}

// myInfo.newEmail = "akashjakkapalli000@gmail.com"

// Object.freeze(myInfo) // now u can't change in object
// myInfo.new2Email = "akashjakkapalli000@gmail.com"
// console.log(myInfo);


myInfo.greeting = function(){
    console.log("Hello my name is Akash");   
}

console.log(myInfo.greeting());


myInfo.greeting = function(){
    console.log(`hello JS user ${this.myName}`);   
}

console.log(myInfo.greeting);
console.log(myInfo.greeting());
