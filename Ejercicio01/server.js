var http = require("http");
var url = require("url");

function iniciar(route, handle) {
  
  function onRequest(request, response) {
    var ruta = url.parse(request.url).pathname;
    console.log("Petición para " + ruta + " recibida.");
    var contenido = route(ruta, handle);
    response.writeHead(200, {"Content-Type": "text/html"});
    //response.write("<p>Hola, aquí estamos probando <b>node js </b>");
    response.write(contenido);
    response.end();
  }

    http.createServer(onRequest).listen(8888);
    console.log("Servidor Iniciado en http://localhost:8888.");
  }

  exports.iniciar = iniciar;
