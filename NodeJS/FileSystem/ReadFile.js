console.log("Execution Started");
const fs = require("fs");
const path = require("path");

//redirecting to folder----------------
const dir_path = path.join(__dirname, "Files");
const file_path = path.join(dir_path, "file_1.txt");

//Async---read file----------------
// fs.readFile(file_path,'utf-8',(error,data)=>{
//     console.log("Execution Endddd");
// if(!error){
//     console.log(data);
// }
// })

//Sync--- readfile sync------------
// let data=fs.readFileSync(file_path,'utf-8')
// console.log("data: "+data);
// console.log("Execution End");

//Reading even position words from the file----------
// const data = fs.readFileSync(file_path, 'utf8');
// const words = data.split(/\s+/);
// const evenWords = [];
// for (let i = 1; i < words.length; i += 2) {
//     evenWords.push(words[i]);
// }
// console.log('Even words:', evenWords);

//Appending data------------------
// fs.appendFileSync(file_path,'Shivani')

//Deleting the file--------------
// fs.unlinkSync(file_path)

//Count of special characters and vowels in a file
const data = fs.readFileSync(file_path, "utf8");
const sCharRegex = /[^\w\s]/g;
const vowels = "aeiouAEIOU";
let vowelCount = 0;

//special char
const specialChars = data.match(sCharRegex);
const charCount = specialChars ? specialChars.length : 0;
console.log(`Number of special characters in file are: ${charCount}`);

//vowels count
for (let i = 0; i < data.length; i++) {
  const char = data[i];
  if (vowels.includes(char)) {
    vowelCount++;
  }
}

console.log(`Number of vowels: ${vowelCount}`);

console.log("Execution End");
