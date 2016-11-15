var http = require('http');
http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end('Hello World\n node sample is up on heroku ');
}).listen(process.env.PORT);
console.log('Server running at http://127.0.0.1:1337/');