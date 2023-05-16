import dotenv from 'dotenv';
import Server from './server';
dotenv.config();

const server = new Server();

console.log(`hola ${process.env.PORT}`)

server.listen();