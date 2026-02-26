// ================= NORMAL FUNCTION =================
function add(a, b) {
    return a + b;
}
console.log(add(4, 5));


// ================= FUNCTION EXPRESSION =================
const sum = function(a, b) {
    return a + b;
};
console.log(`Sum of 4 and 5 is ${sum(4, 5)}`);

// ================= ARROW FUNCTION =================
// Single line arrow function
const addArrow = (a, b) => a + b;
console.log(addArrow(4, 5));
console.log(addArrow(44, 53));

// Arrow function with single parameter
const msg = s => `Hello world! ${s}`;
console.log(msg(6));

// Multi-line arrow function
const showJS = () => {
    console.log("JavaScript");
};

showJS();
