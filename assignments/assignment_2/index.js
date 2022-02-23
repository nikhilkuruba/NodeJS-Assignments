const fs = require("fs");
const http = require("http");
const path = require("path");


http.createServer((res)=>{
    fs.readFile(path.join(__dirname,"index.html"),{encoding:"utf-8"},(data)=>{
        res.write(data)
        res.end()
    })

}).listen(3000)
