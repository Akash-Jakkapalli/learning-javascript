
// for in loop using Object

const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'ruby'
 
}
for (const key in myObject) {
    console.log(`${key} :- ${myObject[key]}`);
    
}

// for in loop using array

const myarr = ['js', 'cpp,', 'rb']

for (const key in myarr) {
    console.log(myObject[key]);
}