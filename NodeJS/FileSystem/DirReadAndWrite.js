// filesystem module is fs

const fs=require('fs')
const path=require('path')

//to get file path
// console.log(__dirname);

//to redirect to a folder known as 'Files' and create files (here 5 files will be created)
const dir_path=path.join(__dirname,'Files')

//create files (here 5 files will be created)
// for(let i=0;i<5;i++){
//     fs.writeFileSync(`${dir_path}/file_${i}.txt`,"Cybage Softwares")
// }

fs.readdir(dir_path,(error,files)=>{
    for(let val of files){
        console.log(val);
    }
})