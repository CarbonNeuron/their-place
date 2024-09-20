import { Server as HttpServer } from "http";
import { Server as IOServer } from "socket.io";

import { NextApiRequest, NextApiResponse } from "next";

type NextApiResponseWithSocket = NextApiResponse & {
  socket: {
    server: HttpServer & {
      io?: IOServer;
    };
  };
};

export let ioServer: IOServer | undefined;

const ioHandler = (req: NextApiRequest, res: NextApiResponseWithSocket) => {
  if (!res.socket.server.io) {
    console.log("Starting Socket.IO server...");
    const io = new IOServer(res.socket.server, {
      path: "/api/socket",
    });

    // Monkey patching to access socket instance globally.
    (global as any).io = io;
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      console.log("New client connected");

      socket.on("message", (msg) => {
        console.log("Message received:", msg);
        socket.broadcast.emit("message", msg);
      });

      socket.on("disconnect", () => {
        console.log("Client disconnected");
      });
    });
  } else {
    console.log("Socket.IO server already running.");
  }
  res.end();
};

export default ioHandler;
