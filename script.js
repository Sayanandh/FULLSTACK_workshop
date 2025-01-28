console.log("Hello World!");
console.log(document);
var a = 10;
let b = 20;
const c = 30;
if (true) {
    var a = 40;
    let b = 50;
    console.log(a); // Prints 40
    console.log(b); // Prints 50
}
console.log(a); // Prints 40
console.log(b); // Prints 20

let name = "Alice";
let age = 25;
let isStudent = true;
console.log(typeof name); 
console.log(typeof age); 
console.log(typeof isStudent);  
console.log("Hello " + name); 
let y = "21";
console.log(typeof y);  
let x = Number(y);
console.log(typeof x);  
age = 20;
if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}
let result = age >= 18 ? "You are an adult" : "You are a minor";
console.log(result);
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);  
}
for (let num of arr) {
    console.log(num);  
}
function add(a, b) {
    return a + b;  
}
console.log(add(1, 2));  

let text = "Rain in the spain";
pattern = /Rain/;
if (pattern.test(text)) {
    console.log("Pattern found");  
} else {
    console.log("Pattern not found");
}

 
function validateEmail() {
     const email = document.getElementById("email").value;
    
     const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
     const result = document.getElementById("result");
    
     if (pattern.test(email)) {
        result.textContent = "✅ Valid email address!";
        result.style.color = "green";
    } else {
        result.textContent = "❌ Invalid email address!";
        result.style.color = "red";
    }
    
     return false;
}