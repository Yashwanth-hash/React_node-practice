
const http = require("http");

const server = http.createServer((req,res) =>{
        res.end("Changes instantly");
});

server.listen(3000);


