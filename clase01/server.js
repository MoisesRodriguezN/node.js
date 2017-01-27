var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hola Mundo");
  response.write("<p>Hola, aquí estamos probando <b>node</n> js </b>");
  response.end();
}).listen(8888);
