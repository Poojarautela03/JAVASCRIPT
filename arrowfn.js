// Arrow Functions
// Note: Arrow functions cannot be called before they are defined

// Single parameter → implicit return
const add = a => a;
console.log(add(4));   // Output: 4

// No parameter arrow function
const greet = () => {
    console.log("Hello World");
};

greet();   // Output: Hello World
