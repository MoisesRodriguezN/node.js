var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

/*
var handle = {}
handle["/"] = requestHandlers.inicio;
handle["/inicio"] = requestHandlers.inicio;
handle["/contacto"] = requestHandlers.contacto;
handle["/error404"] = requestHandlers.error404;
*/

var handle = {
  "/": requestHandlers.inicio,
  "/inicio": requestHandlers.inicio,
  "/contacto": requestHandlers.contacto,
  "/media": requestHandlers.media,
  "/error404": requestHandlers.error404
}
server.iniciar(router.route, handle);
