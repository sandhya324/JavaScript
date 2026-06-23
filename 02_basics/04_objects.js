// const tinderUser = new Object() //single term object 
const tinderUser={} //none single term object

tinderUser.id = "123abc"
tinderUser.name = "Sara"
tinderUser.isLoggedIn = false

// console.log(tinderUser);



const regularUSer = {
    email: "sdhya3842@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sandu",
            lastname: "Padawali"
        }
    }
}
// console.log(regularUSer.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)


// const obj3 = {...obj1, ...obj2}
// // console.log(obj3);


// const users = [
//     {
//         id: 1,
//         email: "abc@gmail.com"
//     },
//     {
//         id: 1,
//         email: "abc@gmail.com"
//     },
//     {
//         id: 1,
//         email: "abc@gmail.com"
//     },
//     {
//         id: 1,
//         email: "abc@gmail.com"
//     }
// ]

// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "sandhya"
}

//course.courseInstructor

// const {courseInstructor} = course 
// console.log(courseInstructor);

// const {courseInstructor: Instructor} = course  //deconstruct the object
// console.log(Instructor);


// const navbar = ({company}) => {   //React 
// }
// navbar(company = "sandhya")


{
    name: "sandhya",
    price: "free",
    coursename: "js in hindi"
}
{
    {},
    {}, 
    {}
}