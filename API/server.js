// imports express
import express from 'express';
import index from './Routes';

// instantiates our server from express, and name it server
const server = express();


server.use('/', index);

// a function that prints to the command line that our server is running
const displayServerMessage = () => console.log('My Diary API server is listening on Port 8888');


// we will make our server to listen on port 8888 and pass in the function displayServerMessage as second argument
server.listen(8888, displayServerMessage);

// export our server to the whole app
export default server;

