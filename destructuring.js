// OBJECT DESTRUCTURING 
const student = {
    name: "John",
    age: 34,
    class: "CSE16",
    address: {
        city: "New York",
        state: "NY",
        zip: "10001"
    }
};
// Nested destructuring with default values
const {
    name,
    age,
    class: studentClass,
    address: {
        city,
        state,
        zip
    }
} = student;

console.log("Name:", name);
console.log("Age:", age);
console.log("Class:", studentClass);
console.log("City:", city);
console.log("State:", state);
console.log("ZIP:", zip);


//ARRAY DESTRUCTURING

const numbers = [12, 13, 15, 16, 17];

// Using rest operator
const [first, second, ...remaining] = numbers;

console.log("First:", first);
console.log("Second:", second);
console.log("Remaining:", remaining);
