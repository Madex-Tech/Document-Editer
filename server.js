const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.static(__dirname));

let documentContent = ""; // shared state

io.on("connection", (socket) => {
  console.log("A user connected");

  // Send current content to new user
  socket.emit("document change", documentContent);

  // Listen to changes from users
  socket.on("document change", (content) => {
    documentContent = content;
    socket.broadcast.emit("document change", content);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

const PORT = 3000;
http.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
