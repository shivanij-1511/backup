const fs = require("fs");
const path = require("path");
const http = require("http");

const dir_path = path.join(__dirname, "Files");
const write_file_path = path.join(dir_path, "data.txt");
const read_file_path = path.join(dir_path, "info.txt");

const server = http.createServer();

//create stream
let w_stream = fs.createWriteStream(write_file_path);
let r_stream = fs.createReadStream(read_file_path);

//creating pipe of from and to files
r_stream.pipe(w_stream);

//creating events
server.on("request", (request, response) => {
  r_stream
    .on("data", (chunk) => {
      response.write(chunk);
    })
    .on("end", () => {
      response.end;
    })
    .on("error", (error) => {
      console.log(error);
    })
    w_stream.on("finish",()=>{
        response.write("finish writing")
    })
});

server.listen(5500);
