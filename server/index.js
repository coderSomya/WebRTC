const express = require('express');
const bodyParser = require('body-parser');
const {Server} = require('socket.io')

const io = new Server();
const app = express();

const port1 =8000;
const port2= 8001;

app.use(bodyParser.json);

io.on("connection", (socket)=>{
  console.log(socket.id)
})

app.listen(port1, ()=>{
    console.log("app listening");
})
io.listen(port2, ()=>{
    console.log('socket listening');
})