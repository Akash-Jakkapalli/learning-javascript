//Objects

const user = {
    name:"akash",
    age: 19,
    email: "akash@google.com"
}
const marks = {
    math: 99,
    phy: 90,
    chem: 85
}
// console.log(typeof user["name"]);

const userInfo = Object.assign(user,marks)
console.log(userInfo);

console.log(userInfo === user); //true

