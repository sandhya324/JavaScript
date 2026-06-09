// JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicity declare the type of a variable before using it. you can assign different types of values to a variable during it's lifetime.

// Primitive
// "Primitive data types are passed by value. This means that whenever we copy them from one place to another, the reference to the original memory location is not shared. Instead, a separate copy of the data is created and provided. Therefore, if we make changes to the copied value, the original value remains unchanged because the modification is made only to the copy."
// 7 types : String, Number , Boolean, null, undefined, Symbol -> to make value unique, Bigint-> to handle scienctific value

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;  //undefine

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId)

const bigNumber = 857857875847589475n;



//Reference (Non primitive) -> in this type of datatype , the reference to the original memory location is shared.
// Types : Array, Objects, Functions 


const heros = ["krish", "batman", "spiderman"]
let myObj = {
    name: "sandu",
    age: 22
}

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof bigNumber);
// console.log(typeof myFunction ); // but it is called object function







//------------------------lecture-10------------------------------------------
//Stack (primitive) => return copy , Heap (Non-Primitive) => return reference

let myYoutubename = "SanDhya";
let anothername = myYoutubename


// ------------value change------------
anothername = "sandhya"
// console.log(myYoutubename);

// console.log(anothername);



let user = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = user
userTwo.email = "sdhya3842@gmail.com"

console.log(user.email);
console.log(userTwo.email);



