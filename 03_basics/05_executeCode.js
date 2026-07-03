// How does javascript execute code + call stack 

//-------------JavaScript Execution Context------------------
// Execution context means how javascript will run or execute the file we made. to run our file Javascript divide our programs into two phase 
// {} -> Global Execution context (this variable refere to GEC )

//Javascript is a single thread

// types:
//    -> Global Execution Context
//    -> Function Execution Context
//    -> Eval Execution Context

// {} javascript run it into two phases
// -> Memory Creation Phase
// -> Execution phase

// let val1 = 10
// let val2 = 5
// function addNum(num1, num2){
//     let total = num1 + num2;
//     return total;
// }
// let result1 = addNum(val1, val2)
// let result2 = addNum(10, 2)

// 1) -> Global Execution -> this
// 2) Memory Phase : 
//                   val1 -> undefined
//                   val2 -> undefined
//                   addNum -> defination
//                   result1 -> undefined
//                   result2 -> undefined
            
// 3) Execution Phase 
//    val1 <-10                                       Delete
//    val2 <-5                                          |
//    addNum --> new Variable environment  + Execution thread -----
        //                                                         |
        //                                                         | 
        //                                                         |
        //      ----------------------------------------------------
        //      |                              |
        // Memory Phase                     Execution useContext
        // val1 -> undefined                   num1 -> 10
        // val2 -> undefined                   num2 -> 5
        // total -> undefined                  total -> 15