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
 
 socket.emit('NewMsg',{
     from:'jkbjkj',
     text:'How are you?',
 })
 socket.on('NewMsg',(newEmail)=>{
  console.log(newEmail);
 })
 socket.on('disconnect',()=>{
     console.log('user disconnected');
 })
})
server.listen(port,()=>{
    console.log("Server is up on port 3000");
});