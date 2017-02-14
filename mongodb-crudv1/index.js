var express = require('express');
var mongodb = require('mongodb');
var bodyParser = require('body-parser');
var app = express()

app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({extended: true}));

var dbUrl = 'mongodb://127.0.0.1:27017/gestion'

app.get('/', function (req, res) {
  /*
  let datos = [
    {
      nombre: "Pepe",
      apellido: "Pérez",
      edad: 25,
      pais: "Polonia"
    },
    {
      nombre: "María",
      apellido: "González",
      edad: 25,
      pais: "Polonia"
    }
  ]*/

  mongodb.connect(dbUrl, function(err, db){
    let datos = {};
    db.collection('usuarios').find().toArray(function(err, docs) {
      datos.usuarios = docs;
      res.render('index', datos);
    });
  });
});

app.get('/formulario', function (req, res) {
  res.render('formulario');
});

app.post('/inserta-usuario', function (req, res) {
  mongodb.connect(dbUrl, function(err, db){
    datos = {};

    let usuario = {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      edad: req.body.edad,
      pais: req.body.pais
    };

    datos.usuario = usuario;

    db.collection('usuarios').insert(usuario);

    res.render('inserta-usuario', datos);
  });
});

app.get('/modificar', function (req, res) {
  res.render('modificar');
});

app.post('/index', function (req, res) {
  mongodb.connect(dbUrl, function(err, db){
    datos = {};

    let usuario = {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      edad: req.body.edad,
      pais: req.body.pais
    };

    datos.usuario = usuario;

    res.render('inserta-usuario', datos);
  });
});

app.post('/borrar', function (req, res) {
  mongodb.connect(dbUrl, function(err, db){

    let borrado = {
      _id: new mongodb.ObjectID(req.body._id)
    };

    db.collection('usuarios').remove(borrado)

    res.render('borrar');
  });
});

app.listen(8080, function () {
  console.log('Servidor escuchando en http://localhost:8080')
})
