const fs = require("fs");
const http = require("http");
const path = require("path");

const dir_path = path.join(__dirname, "files");
const file_path = path.join(dir_path, "info.txt");

let server = http.createServer();


///read events: data,end,error
server.on("request", (request, response) => {
  const r_stream = fs.createReadStream(file_path);

  r_stream
    .on("data", (chunk) => {
      response.write(chunk);
    })
 
    .on("end", () => {
      response.write(" done with reading data!!!!!!!!!!!");
      response.end();
    })
  

    .on("error", (error) => {
      response.write(error);
      response.end();
    });
});

server.listen(4000);
