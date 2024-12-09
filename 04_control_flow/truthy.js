const userEmail = "akash@goole.com"

if (userEmail) {
    // console.log("got user Email");
}
else {
    console.log("Don't have user Email");   
}

// falsy values

// false , 0, -0, BigInt 0n, "", null, undefined, NaN


// truthy values

// "0", 'false', " ", [], {}, function(){}

const password = []

if (password.length === 0) {
    // console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    // console.log("Object is empty");   
}


// nullish Coalescing Operator (??) : null , undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 15
val1 = undefined ?? 20
val1 = null ?? 10 ?? 20

console.log(val1);


// terniary Operator

// condition ? true : false

const coldcoffePrice = 120

coldcoffePrice >= 90 ? console.log("Good price") : console.log("It is Expensive");

