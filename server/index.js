const express = require("express");
const { Server } = require("socket.io");
const http = require('http');
const cors = require("cors");
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(cors())

const httpServer = http.createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "http://127.0.0.1:5173",
    methods: ["GET", "POST"]
  }
});

io.use((socket,next)=>{
  const username = socket.handshake.auth.username;
  if(!username){
    return next(new Error('invalid username'))
  }
  socket.username = username,
  socket.userId = uuidv4();
  next()
})

app.get("/", (req, res) => {
  res.send("Chat server running by Saksham");
});

io.on("connection", async (socket) => {
  //all connected users
  const users = []
  for (let [id,socket] of io.of('/').sockets){
    users.push({
      userId: socket.userId,
      username: socket.username
    })
  }

  socket.emit('users',users)
  //connected users details
socket.emit('session', {userId: socket.userId, username: socket.username})
//new user connection
socket.broadcast.emit('user connected',{
  userId: socket.userId,
  username: socket.username
})
});

const port = process.env.PORT || 4000;

httpServer.listen(port, console.log(`Server running at port ${port}`));