const http = require("http");
const fs = require("fs");
const path = require("path");

//NOTE :- this is a bare bone server as file serving was the only required case for the assignment

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "GET") {
    const requestedFile = path.join(__dirname, "", req.url);
    fs.access(requestedFile, fs.constants.R_OK, (err) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
      } else {
        fs.createReadStream(requestedFile).pipe(res);
      }
    });
  } else {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Method Not Allowed");
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
