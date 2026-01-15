// Hoisting(declaration and function decalaration will move to the top 0f the scope and hoisting will applicable for var variable only not for let,const)
// TDZ : when we declare the variable with let and const without its proper initialization then the varible lies in temporal dadzone until its proper initialization.

// Question 1
// let arr = [1, 2, 3, 4, 5];
// let res = arr.filter((x)=>x>=3);
// console.log(res)

// let marks = [32, 11, 7, 24, 19, 35, 10, 0, 15, 17];
// // let res = marks.filter((x)=>x>=16);
// // console.log(res,"pass")

// let res = marks.filter((x)>={
//     if(x>=16){
//         console.log(x,"pass")
//     }
//     else{
//         console.log(x,"fail")
//     }
// });

let arr = [1, 2, 3, 4, 5];
let sum = 0;
for(let i=0; i<arr.length;i++){
    sum = sum+arr[i];
}
console.log(sum);