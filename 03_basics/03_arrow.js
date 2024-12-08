
const user = {
    userName : "akash",
    password : 2000,

    welcomeMessage : function() {
        console.log(`${this.userName} , welcome to website`);
        console.log(this);
        
        
    }
}

// user.welcomeMessage()
// user.userName = "Vijay" // chenging the context (values)
// user.welcomeMessage()
// console.log(this);


// function code() {
//     let name = "akash"
//     console.log(this.name);
// }
// code() // we canot use this in function's

// const code = function(){
//     let name = "akash"
//     console.log(this.name);  
// }
// code()


//++++++++++++++ Arrow function  () => {}  ++++++++++++++

const code = () => {
    let name = "akash"
    console.log(this);  
}
// code()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )
// console.log(addTwo(2, 2));


const addTwo = (num1, num2) => ({userName: "akash"})
console.log(addTwo());
