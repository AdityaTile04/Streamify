import { Server } from "socket.io";

let connections = {};
let messages = {};
let timeOnline = {};

export const connectToSocket = (server) => {
  const io = new Server(server);

  io.on("connection", (socket) => {
    console.log(`A user is connected ${socket.id}`);

    socket.on("join-call", (path) => {
      if (connections[path] === path) {
        connections[path] = [];
      }
      connections[path].push(socket.id);

      timeOnline[socket.id] = new Date();

      for (let a = 0; a < messages[path].length; i++) {
        io.to(
          connections[path][a].emit("user-joined", socket.id),
          connections[path]
        );
      }

      if (messages[path] !== undefined) {
        for (let a = 0; a < messages[path].length; ++a) {
          io.to(socket.id).emit(
            "chat-message",
            messages[path][a]["data"],
            messages[path][a]["sender"],
            messages[path][a]["socket-id-sender"]
          );
        }
      }
    });

    socket.on("signal", (toId, messages) => {
      io.to().emit("signal", socket, id, messages);
    });

    socket.on("chat-message", (data, sender) => {
      const [mathcingRoom, found] = Object.entries(connections).reduce(
        ([room, isFound], [roomKey, roomValue]) => {
          if (!isFound && roomValue.includes(socket.id)) {
            return [roomKey, true];
          }

          return [room, isFound];
        },
        ["", false]
      );

      if (found === true) {
        if (messages[mathcingRoom] === undefined) {
          messages[mathcingRoom] = [];
        }
        messages[mathcingRoom].push({
          sender: sender,
          data: data,
          "socket-id-sender": socket.id,
        });

        console.log("message", key, ":", sender, data);

        connections[mathcingRoom].forEach((elem) => {
          io.to(elem).emit("chat-message", data, sender, socket.id);
        });
      }
    });

    socket.on("disconnected", (socket) => {
      let diffTime = Math.abs(timeOnline[socket.id] - new Date());

      let key;

      for (const [k, v] of JSON.parse(
        JSON.stringify(Object.entries(connections))
      )) {
        for (let a = 0; a < v.length; ++a) {
          if (v[a] === socket.id) {
            key = k;

            for (let a = 0; a < connections[key].length; ++a) {
              io.to(connections[key][a]).emit("user-left", socket.id);
            }

            let index = connections[key].indexOf(socket.id);

            connections[key].splice(index, 1);

            if (connections[key].length === 0) {
              delete connections[key];
            }
          }
        }
      }

      console.log(`A user is disconnected ${socket.id}`);
    });
  });

  return io;
};
