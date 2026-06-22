//singleton

//object literals  
// Object.create   //this is called through constructor

const mySym = Symbol("key1")

const JsUser = {
    name: "Sandu",
    "Full Name" : "Padawali",
    [mySym] : "mykey1",
    age: 23,
    location: "Dehradun",
    email: "sdhya3842@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(JsUser["Full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser.mySym);

// JsUser.email = "sdhya3842@gmail.com"
// Object.freeze(JsUser)
// JsUser.email = "sandhya@gmail.com"
// console.log(JsUser);



// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log("Hello JS user, ${this.name}")
}
console.log(JsUser.greetingTwo());