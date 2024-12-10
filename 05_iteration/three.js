
// for of

["", "",""]
[{}, {}, {}]


const arr = [1, 2, 3, 4, 5]
for (const nums of arr) {
    // console.log(nums);
    
}


const greeting = "GOOD MORNING"
for (const greet of greeting) {
    // console.log(greet)
    
}


// Maps

const map = new Map()
map.set("IN", "India")
map.set("USA", "united state of america")
map.set("FR", "france")
map.set("IN", "India")


// console.log(map);

// forof using maps

for (const [key, value] of map) {
    // console.log(key, ":-" , value);
    
}


// forof using Objects

const myObject = {
    game1 : 'PUBG',
    game2 : 'NFS'
}

// for (const [key, value] of myObject) {
//     console.log(key, ":-" , value); // (Object) is not iteratable 
// }