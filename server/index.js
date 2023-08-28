const express = require('express');
const bodyParser = require('body-parser');
const {Server} = require('socket.io')
const cors= require('cors')

const io = new Server();
const app = express();

const port1 =8000;
const port2= 8001;

app.use(cors())

app.use(bodyParser.json());

const emailtosocketmapping = new Map();
const sockettoemailmapping = new Map();


io.on("connection", (socket)=>{
    console.log(socket.id)
  socket.on('join-room', (data)=>{
    const {emailid, roomid} = data;
    console.log("user", emailid, "joined in room", roomid)
    socket.join(roomid);
    emailtosocketmapping.set(emailid, socket.id)
    socket.broadcast.to(roomid).emit('user-joined', {emailid})
    socket.broadcast.to(roomid).emit("user-joined", {emailid});
  });
})

app.listen(port1, ()=>{
    console.log("app listening");
})
io.listen(port2)
