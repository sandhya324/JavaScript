
// function sayMyName(){
//     console.log("S");
//     console.log("a");
//     console.log("n");
//     console.log("d");
//     console.log("u");
// }
 
// sayMyName()



// function addTwoNumber(number1, number2){ //parameters when we create definition of function 
//     console.log(number1 + number2); 
// }

// addTwoNumber (3,5) // this is function arguments when we call function 





// function addTwoNumbers(number1, number2){ //parameters when we create definition of function 
//        // let result = number1 + number2;
//       // return result;
//     return number1 + number2;
// }

// const result = addTwoNumbers(4, 5)
// console.log("Result:" , result);




// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter a username");
//         return;
//     }
//     return `${username} just logged in`
// }

// // console.log(loginUserMessage("Sandhya"));
// console.log(loginUserMessage());




// function calculateCartPrice(...num1){  // "..." this is call rest and spread operator based on it's use  
//     return num1;
// }

// console.log(calculateCartPrice(200, 400, 500));


// function calculateCartPrice(val1, val2,...num1){  // "..." this is call rest and spread operator based on it's use  
//     return num1;
// }
// console.log(calculateCartPrice(200, 400, 500, 100));





//------ that's how we pass Object in function and use in function----
// const user = {
//     username: "sandhya",
//     price: 199
// }
// function handleObject(anyObject){
//     console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
// }
// handleObject(user);

// handleObject({  //can pass direct object with create it 
//     username: "Sam",
//     price: 399
// })


// const myNewArray = [200, 400, 100, 400] //pass array
// function returnSecondValue(getArray){
//     return getArray[1]
// }
// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 100, 400 ]));


