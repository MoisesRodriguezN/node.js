var http = require("http");
var url = require("url");

function iniciar(route) {
  
  function onRequest(request, response) {
    var ruta = url.parse(request.url).pathname;
    console.log("Petición para " + ruta + " recibida.");
    route(ruta);
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<p>Hola, aquí estamos probando <b>node js </b>");
    response.write("<p>Programa dividido en dos ficheros</p>");
    response.write("<p>Ruta: " + ruta + "</p>");
    response.end();
  }

    http.createServer(onRequest).listen(8888);
    console.log("Servidor Iniciado.");
  }

  exports.iniciar = iniciar;
