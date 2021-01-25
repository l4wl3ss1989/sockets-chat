const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const cors = require('cors');

const Sockets = require('./sockets');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // Http server
    this.server = http.createServer(this.app);
    // Sockets configurations
    this.io = socketio(this.server, {
      /*Configs...*/
    });
  }

  middlewares() {
    // Public directory
    this.app.use(express.static('public'));

    // CORS
    this.app.use(cors());
  }

  configureSockets() {
    new Sockets(this.io);
  }

  execute() {
    // Init. Middlewares
    this.middlewares();
    // Init. sockets
    this.configureSockets();
    // Init. Server
    this.server.listen(this.port, () =>
      console.log(`✔ Server running on port: ${this.port}`.green)
    );
  }
}

module.exports = Server;
