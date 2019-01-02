const path = require("path");
const http = require("http");
const express = require("express");
const socketIO = require("socket.io");


const port = process.env.PORT||3000;
const PathPublic = path.join(__dirname,"../public");
const app = express();
var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(PathPublic));
io.on('connection',(socket)=>{
 console.log('New user connected');
 

 socket.on('NewMsg',(newEmail)=>{
  console.log(newEmail);
  io.emit('NewMsg',{
      from:newEmail.from,
      text:newEmail.to
  })
 })
 socket.on('disconnect',()=>{
     console.log('user disconnected');
 })
})
server.listen(port,()=>{
    console.log("Server is up on port 3000");
});