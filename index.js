require('colors');
require('dotenv').config(); // .env

const Server = require('./models/server');

const server = new Server();

server.execute();
