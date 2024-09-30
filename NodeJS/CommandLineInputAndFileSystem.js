


const fs=require('fs')
if(process.argv[2]=="write")
{
    fs.writeFileSync(process.argv[3],process.argv[4])
}
else if(process.argv[2]=="remove")
{
    fs.unlinkSync(process.argv[3]) //dlete file
}
else{
    console.log("please enter valid input create or remove");
}




////accept numbers from command line and hold it into array and find odd numbers

// const oddNumbers = process.argv.slice(2).filter((number) => number % 2 !== 0);
// console.log(oddNumbers)

//____________
// const [a, b, ...rest] = process.argv;
 
// console.log(
//   "ODD Numbers : ",
//   rest.filter((number) => number % 2 !== 0)
// );
 //______________
 