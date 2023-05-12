import server from "./app.js";
import { Server } from "socket.io";

const PORT = process.env.PORT || 8080;
const ready = () => console.log("server ready on port " + PORT);
const chats = [];
const http_server = server.listen(PORT, ready);
const socket_server = new Server(http_server);
socket_server.on("connection", (socket) => {
  // socket server trabaja para todos los clientes
  //   console.log(socket.client.id);
  socket.on("auth", () => {
    //socket solo para cada cliente
    socket_server.emit("allMessagess", chats);
  });
  socket.on("new_message", (data) => {
    chats.push(data);
    console.log(chats);
    socket_server.emit("allMessagess", chats);
  });
});
