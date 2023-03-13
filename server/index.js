const express = require("express");
const { Server } = require("socket.io");
const http = require('http');
const cors = require("cors");

const app = express();
app.use(cors())

const httpServer = http.createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

app.get("/", (req, res) => {
  res.send("Chat server running by Saksham");
});

io.on("connection", async (socket) => {

});

const port = process.env.PORT || 4000;

httpServer.listen(port, console.log(`Server running at port ${port}`));