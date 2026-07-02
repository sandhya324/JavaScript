// const user = {
//     username: "Sandhya", 
//     price: 999,
    
//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
//     }
// }

// user.welcomeMessage() // current context 
// user.username = "Sam"  // context change 
// user.welcomeMessage() 

// console.log(this);    //inside node environment this refere to empty object
                        //inside brower the global object is window 



//---------------Arrow funcion ---------------
// function one(){
//     let username = "sandhya";
//     console.log(this.username); // print this inside the function in node environment it print multiple values such as fetch , structureClone , global , micro-task 
// }
// one()



// const one = function(){
//     let username = "sandhya";
//     console.log(this.username);
// }
// one()



// const one = () => {
//     let username = "sandhya";
//     console.log(this);
// }
// one()


// const addTwo = (num1 , num2) => {   //basic arrow function  or Explicit 
//     return num1 + num2;
// } 
// console.log(addTwo(3,4))


// const addTwo = (num1 , num2) =>  (num1 + num2);   //implicit function   
// console.log(addTwo(3,4))                         //() no need return {} need return 



// const addTwo = (num1 , num2) =>  ({username: "sandhya"})
// console.log(addTwo(3,4))   