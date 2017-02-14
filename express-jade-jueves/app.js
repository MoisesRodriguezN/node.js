var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'jade');

var persona = {
  nombre: "Aitor",
  apellidos: "Menta",
}

var direccion = {
  direccion:"Marie curie, 10 - PTA. Campanillas Málaga"
}

app.get('/', function (req, res) {
  res.render('index');
  //res.send('Hola mundo!');
});

app.get('/contacto', function (req, res) {
  res.render('contacto', direccion);
});

app.get('/usuarios', function (req, res) {
  res.render('usuarios', persona);
});

app.get('/saluda/:nombre', function (req, res) {
  let datos = {
    "nombre": req.params.nombre
  };
  //console.log("Hola", req.params.nombre);
  res.render('saluda', datos);
});

app.get('/formulario', function (req, res) {
  res.render('formulario');
});

app.post('/registro', function (req, res) {
  console.log(req.body.usuario);
  let datos = {
    "usuario": req.body.usuario,
    "contrasena": req.body.contrasena
  };
  res.render('registro', datos);
});

app.listen(8080);
