// Arrays

const numbers = [1, 2, 3, 4, 5]
// console.log(numbers[0]);

// array methods

const myArray = [0, 1, 2, 3, 4, 5]

// myArray.push(6)
// myArray.push(7)
// myArray.pop()

//myArray.unshift(10) // add element at first 
//myArray.shift() // removes first element


// console.log(myArray.includes(10));
// console.log(myArray.indexOf(0));

const newArr = myArray.join()

// console.log(myArray);
// console.log(newArr);



// slice & splice

console.log("A " , myArray); // A [ 0, 1, 2, 3, 4, 5 ]

const mya1 = myArray.slice(1, 3) // [ 1, 2]
console.log(mya1)

console.log("B " , myArray);

const mya2 = myArray.splice(1, 3) // [ 1, 2, 3 ]

console.log("C ", myArray); // C [ 0, 4, 5 ]
console.log(mya2);



console.log(Array.isArray("akash")); // not a array

console.log(Array.from("akash")); 

console.log(Array.from({name: "akash"})); // []

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));


const fruits = ["Apple", "Banana", "Mango"]
let allfruits = fruits.join("kela")
console.log(allfruits);
