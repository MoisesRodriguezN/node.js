let fs = require('fs');

function inicio() {
  console.log("Manipulador de petición 'inicio' ha sido llamado.");
  //return "Pagina de incio";
  return fs.readFileSync("index.html","utf-8");
}

function contacto() {
  console.log("Manipulador de petición 'contacto' ha sido llamado.");
  return "Marie, 10 PTA Campanillas (Malaga)";
}

function error404() {
  console.log("Recurso no encontrado.");
  return "404 Recurso no encontrado. Compruebe que la ruta está bien escrita en el navegador.";
}

exports.inicio = inicio;
exports.contacto = contacto;
exports.error404 = error404;
