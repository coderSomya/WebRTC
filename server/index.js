const express = require('express');
const bodyParser = require('body-parser');
const {Server} = require('socket.io')
// const cors= require('cors')

const io = new Server({
    cors:true
});
const app = express();
// const http = require("http").createServer(app);
// const io=require('socket.io')(http, {
//     cors: {
//         origin:"*"
//     }
// })

const port1 =8000;
const port2= 8001;

// app.use(cors())

app.use(bodyParser.json());

const emailtosocketmapping = new Map();
const sockettoemailmapping = new Map();


io.on("connection", (socket)=>{
   
  socket.on('join-room', (data)=>{
    const {emailid, roomid} = data;
    console.log("user", emailid, "joined in room", roomid)
    socket.join(roomid);
    socket.emit("joined-room", {
        roomid
    })
    emailtosocketmapping.set(emailid, socket.id)
    sockettoemailmapping.set(socket.id, emailid);
    socket.broadcast.to(roomid).emit('user-joined', {emailid})
  });

  socket.on('call-user', (data)=>{
   const {emailid, offer} = data;
   
   const socketid= emailtosocketmapping.get(emailid);
   const from = sockettoemailmapping
   socket.to(socketid).emit('incoming-call')
  })


})

app.listen(port1, ()=>{
    console.log("app listening");
})
io.listen(port2)
