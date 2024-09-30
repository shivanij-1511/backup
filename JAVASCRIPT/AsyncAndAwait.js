//promise:
//success--resolve()-->then(callback)
//failure--reject()--->catch(callback)
// let promise=new Promise((resolve,reject)=>{

//     //CASE 1
//     let status=false;
//     let data="welcome to cybage";
//     if(status){
//         resolve(data)
//     }
//     else{
//         reject("request fail")
//     }

//     //CASE 2
//     ///NOTE:this will execute on order basis first one will execute
//     /// reject("BYE")
//     /// resolve("hello")
// })
// promise.then((data)=>{console.log("Then: "+data);}).catch((error)=>{console.log("catch: "+error);})

///---using promise
// console.log("execution start");
//  function display(data)
// {
//     console.log("in display func");
// //asynchronus behaviour by default: if something is getting time it will not wait for it
// let promise=new Promise((resolve,reject)=>{
//     console.log("within promise");
//     setTimeout(function(){
//       resolve(data)
//             },5000)
// })
// return promise;
// }
// display("cybage software PVT LTD!!").then((response)=>{
//     console.log("result is "+response);
// console.log("execution endd!");
// }).catch((error)=>{
//     console.log("result is "+error);
// console.log("execution endd!");
// })

////using promise with output (consumer code) -------
////async-await-promise

// console.log("execution start");
// async function display(data) {
//     console.log("in display func");

//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(data);
//         }, 3000);
//     });
// }
// function xyz(){
//     console.log("shivvvv");
// }

// async function output() {
//     let result = await display("cybage software PVT LTD!!");
//     console.log("result is " + result);
//     console.log("execution endd!");
// }

// output(); //will be printed after a while of printing xyz
// xyz(); //will be printed first
