// Immediately Invoked Function Expressions (IIFE)

(function one(){ //Named IIFE
    console.log(`DB Connected`);  //global scope ke pollution se problem hoti hain kahi bar toh use global scope ke jo variables hain jo bhi yaha declaration hainn uske polution ko hatane ke liye humne iife ka use kiya 
})(); // : semi colon is must here to stop it 




(( name ) => {
    console.log(`DB Connected two ${name}`); 
})('Sandu')




