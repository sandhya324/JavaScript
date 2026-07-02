// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);
// {} when this comes with if-else, function etc. this is called scope of that program and all
// {} this is comes with object too but that is object declaration

// let a = 100;
// var c = 300;
// if(true) {
//     let a = 10;
//     const b = 20;
//     var c = 30; //global scope
//     console.log("Inner: ", a);  
// }
// for(let i=0; i<array.length; i++){
//     const element = array[i];
// }
// console.log(a);
// console.log(b);
// console.log(c);



//-----------------------------------------Scope level and mini hoisting in javascript---------------------------------------
//nested scope
// function one(){
//     const username = "Sandhya"

//     function two(){
//         const website = "Youtube"     //Child function can access parents function's variable but not parent function ca access child variable
//         console.log(username);
//     }
//     // console.log(website);
//     two()
// }
// one()



// if(true){
//     const username = "Sandhya";

//     if(username == "Sandhya"){
//         const website = " Youtube"
//         console.log(username + website);
//     }
    // console.log(website);    // no scope out of the function 
// }
// console.log(username);





//----------------------------interesting concept---------------------------------------

// function addone(num){
//    return num + 1;
// }
// addone(5);

// const addTwo = function(num){
//     return num + 2;
// }
// console.log(addTwo(5))

