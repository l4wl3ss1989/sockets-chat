class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on('connection', socket => {
      console.log(`${'[client]'.blue}(${socket.id}) connected`);

      // Listening event[message-to-server]
      socket.on('message-to-server', data => {
        console.log(`${'[message-to-server]'.blue}(${socket.id}):`, data);

        // socket.emit('message-from-server', data); // 🔎socket sends to current socket/client only.
        this.io.emit('message-from-server', data); // 🔎io sends to all name-space connection.
      });
    });
  }
}

module.exports = Sockets;
