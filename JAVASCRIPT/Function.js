///area of circle
// function circleArea(r){
//     return 3.14*r*r;
// }
// console.log("function example");
// let area=circleArea(3.2)
// console.log("area of circle is "+area);

///nameless function
// let func=function (r){
//     return 3.14*r*r;
// }
// console.log("function example");
// let area=circleArea(3.2)
// console.log("area of circle is "+area);


///ARROW function-no function name, no function keyword,contains parameter list followed by fat arrow ("=>")
///if we have single statement then function body dont need curly paranthesis
///Arrow function support implicite return

// let func=r=>3.14*r*r; //single parameter then no need to give parameter
// let area=func(3.2)
// console.log("area of circle is "+area);

// let triangleArea=(h,b)=>console.log("area of triangle: "+0.5*b*h);
// triangleArea(2.3,4)


// //callback function
// function printName(name) {
//     console.log("in print Name");
//     return name;
    
// }
// function caller(abc){
// console.log("In caller");
// let data=abc();
// console.log(data);
// }

// //callback function
// caller("Shivani") //passing function as parameter to another function

//callback function

function caller(abc){
console.log("In caller");
let data=abc("Cybage");
console.log(data);
}

//callback function ---->function call
caller(name=>name) //nameless function parameter to the another function

    
//passing function as parameter to another function