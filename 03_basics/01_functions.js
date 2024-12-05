
// function

function sayMyName () {
    console.log("A");
    console.log("K");
    console.log("A");
    console.log("S");
    console.log("H");
}

//sayMyName --> function ka reference 
//sayMyName() --> function ka execustion

// sayMyName()

// add two numbers

// function addTwoNum (number1, number2) { // parameter
//     console.log(number1 + number2);   
// }
// addTwoNum(3, 7) // argument

function addTwoNum (number1, number2) { 
    let result = number1 + number2
    return result  
    console.log("AKASH"); // after retun fun dont do any work
    
}
const result = addTwoNum(5, 5)
// console.log("result : " , result);



function logginUserMassage (username = "jony"){
    if (username === undefined) {
        console.log("Enter your user name ");
        
    }
    return `${username} just loggedIn`
}

// console.log(logginUserMassage("AKASH"));
console.log(logginUserMassage());

