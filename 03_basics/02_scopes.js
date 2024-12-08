let a = 300

if (true) {
    let a = 10
    // const b = 20
    // var c =30
    // console.log("Inner : " ,a); // block scope
    
}


// console.log(a);  // global scope
// console.log(b);
// console.log(c);


//nested scope

function one() {
    const username = "Akash"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // inner(child) fun will accses parent variabals 

    // two() 
}

// one()

if(true) {
    const firstName = "akash"

    if (firstName === "akash") {
        const lastName = " Jakkapalli"
        //console.log(firstName + lastName);
    }
    // console.log(lastName); //error
 
}
// console.log(firstName); //error


//+++++++++++++++++ intereststing +++++++++++++++++


console.log(addOne(5));

function addOne(num){
    return num + 1
}

console.log(addTwo(5)); // Cannot access 'addTwo' before initialization

const addTwo = function(num){ // holding in variable
    return num + 2
}

