"use client";

import { useEffect, useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { io } from "socket.io-client";

export const socket = io({
  autoConnect: false,
  path: "/api/socket",
});

export default function SocketThing() {
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
      console.log("Connected");
    }

    function onMessage(data: string) {
      console.log("Message received:", data);
    }
    socket.on("connect", onConnect);
    socket.on("message", onMessage);
    socket.connect();
    return () => {
      socket.disconnect();
      socket.off("connect", onConnect);
      socket.off("message", onMessage);
    };
  }, []);

  return (
    <Stack>
      <Stack alignItems="center" direction="row" gap={2}>
        <Typography>Connected:</Typography>
        <CircleIcon color={isConnected ? "success" : "error"} />
      </Stack>
      <Button
        onClick={() => {
          socket.emit("message", new Date().toString());
        }}
      >
        Send Event
      </Button>
    </Stack>
  );
}
