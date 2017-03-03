var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('client'));
server.listen(6677, () => console.log('El servidor está funcionando en http://localhost:6677'));

app.get('/hola-mundo', (req, res) => res.status(200).send('hola'));

var mensajes = [{
    id: 1,
    texto: "Hola, este es un mensaje por defecto",
    apodo: "Yola Tengo"
}];


io.on('connection', (s) => {
    console.log("El nodo con IP: "+s.handshake.address+"Se ha conectado");
    s.emit('mensajes', mensajes);

    s.on('nuevo-mensaje',
     (mensaje) => {
       mensajes.push(mensaje)
       io.sockets.emit('mensajes', mensajes)
     });
});