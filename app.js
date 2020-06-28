var http = require('http');

http.createServer(function(req, res){
    res.end("Óla");
}).listen(8081);

console.log("Servidor rodando!");