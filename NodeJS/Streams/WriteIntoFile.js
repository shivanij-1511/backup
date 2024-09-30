// const fs=require('fs')
// const path=require('path')
// const http=require('http')
// const { response } = require('express')

// const server=http.createServer()

// const dir_path=path.join(__dirname,'files')
// const file_path=path.join(dir_path,"info.txt")

// server.on("request",(request,response)=>{
//     let data="Shivani jadhav"
//     let w_stream=fs.createWriteStream(file_path);
//     w_stream.write(data);
//     w_stream.end()

//     w_stream.on("finish",()=>{
//         response.write("writting process is finished")
//         response.end()
//     })
// })

// server.listen(4444)

const fs = require("fs");
const path = require("path");
const http = require("http");




///write events:drain,finish,error

// Define the directory and file paths
const dir_path = path.join(__dirname, "files");
const file_path = path.join(dir_path, "info.txt");

// Create HTTP server
const server = http.createServer();

// Ensure the directory exists
if (!fs.existsSync(dir_path)) {
  fs.mkdirSync(dir_path, { recursive: true });
}

// Handle incoming requests
server.on("request", (request, response) => {
  const data = "Shivani Jadhav";

  // Create a write stream
  const w_stream = fs.createWriteStream(file_path);
  w_stream.write(data);
  w_stream.end();

  // Handle the finish event
  w_stream.on("finish", () => {
    response.write("Writing process is finished");
    response.end();
  });

  // Handle errors
  w_stream.on("error", (err) => {
    response.write(`Error: ${err.message}`);
    response.end();
  });
});

// Start the server
server.listen(4444, () => {
  console.log("Server is listening on port 4444");
});
