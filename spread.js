//SPREAD OPERATOR WITH ARRAYS 
let arr1 = [1, 2, 3, 4];
console.log([...arr1]);   // Copy of array
console.log(...arr1);     // Unpacked values

let arr2 = [3, 6, 7, 8];
console.log({ ...arr2 }); // Converted to object → {0:3, 1:6, 2:7, 3:8}

// REFERENCE vs COPY 
// Reference copy
let arr3 = arr1;
arr3.push(5);
console.log(arr3);  // [1,2,3,4,5]
console.log(arr1);  // Changed (because arr3 refers to arr1)

// Real copy using spread
let arrayCopy = [...arr1];
arrayCopy.push(6);
console.log(arrayCopy); // New array
console.log(arr1);      // Original unchanged

// MERGING ARRAYS 

let mergedArray = [...arr1, ...arr2];
console.log(mergedArray);
console.log(arr1);
console.log(arr2);

// SPREAD WITH STRINGS 
let str = "javascript";
console.log(str.split("")); // Array of characters
console.log(...str);        // Unpacked characters
console.log([...str]);      // Spread into array
console.log({ str });       // Object literal


//  SPREAD WITH FUNCTIONS 
let nums = [1,2,3,4,5,6,7,8,9];
function show(a, b, c, ...rest) {
    console.log(a, b, c, rest);
}
show(...nums);

//REST WITH OBJECT DESTRUCTURING 
let student = {
    name: "john",
    age: 22,
    class1: "cse 21",
    sub: "math",
    skill: "js"
};
function display({ name, age, class1, ...rest }) {
    console.log(name, age, class1);
    console.log(rest);
}

display(student);
