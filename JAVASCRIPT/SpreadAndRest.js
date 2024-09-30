//////////----ES 6 CONCEPTS-----///////
///SPREADING----- appears in function call
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9];
// let arr3 = [...arr2, ...arr1];
// console.log("array 1: " + arr1);
// console.log("array 2: " + arr2);
// console.log("array 3: " + arr3);

//_________________________-
// let address={
//     state:"Maharashtra",
//     dist:"Nasik"
// }

// let employee={
//     name:"Shivani",
//     email:"shivanij@cybage.com",
//     ...address//SPREAD OPERTOR
// }
// console.log(employee);
//_______________________________
// function sum(a,b,c){
//     return a+b+c;
//  }

//  let array=[2,5,6]
//  let result=sum(...array)
//  console.log(result);

////REST------ appers in function signature
// function show(msg,...values){
// console.log(msg);
// ///for-of returns values where as for-in returns index
// for(let val of values){
//     console.log(val);
//     // console.log(values[val]); //for   for-in
// }
// }
// show("cybage")
// show("cyabge",12)
// show("cyabge",12,7890,45)
//________________________
// let employee=[
//     {name:"Shivani",
// tech:"React"},{
//     name:"Pratiksha",
//     tech:"Java"
// },
// {name:"Sameer",
// tech:"Python"}
// ]

// // for(let emp of employee){
// //     // console.log(emp);
// //     console.log(emp.name+"\t"+emp.tech);
// // }

// ///--map function use to iterate array as it takes callback as parameter
// employee.map((emp)=>{
//     console.log(emp.name+"\t"+emp.tech);
// })
//_______________________________

// class Book {
//     constructor(bookName, authorName, price) {
//         this.bookName = bookName;
//         this.authorName = authorName;
//         this.price = price;
//     }

//     displayDetails() {
//         console.log(`Book Name: ${this.bookName}`);
//         console.log(`Author Name: ${this.authorName}`);
//         console.log(`Price: $${this.price}`);
//         console.log('---'); // Just a separator for better readability
//     }
// }

// // Create an array of Book objects
// const books = [
//     new Book('To Kill a Mockingbird', 'Harper Lee', 7.99),
//     new Book('1984', 'George Orwell', 6.99),
//     new Book('The Catcher in the Rye', 'J.D. Salinger', 8.99)
// ];

// // Display details of each book in the array
// books.forEach(book => book.displayDetails());

//_______________________________

///reversing the string
// const name = 'Sonali Ashish Maind';
// function reverse(str) {
//     const words = str.split(' ');
//     const reversedWords = words.map(word => word.split('').reverse().join(''));
//     return reversedWords.join(' ');
// }
// const output = reverse(name);
// console.log(output);

// // Function to manually sort an array
// function sortArray(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
// }

// function findMissingElements(arr) {
//   // sortArray(arr);
//   let missing = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     let current = arr[i];
//     let next = arr[i + 1];
//     for (let num = current + 1; num < next; num++) {
//       missing.push(num);
//     }
//   }
//   return missing;
// }

// const numbers = [12, 13, 15, 19];
// const missingElements = findMissingElements(numbers);
// console.log("Missing elements are:", missingElements + " ");


let xyx;
let obj={
    a:'bcs',
    b:'csa',
    c:'bsw'
};

for(let key in obj){
 xyx=obj[key]
 console.log(xyx);
}


      



















































































































































