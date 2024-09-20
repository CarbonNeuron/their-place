import { Server as IOServer } from "socket.io";

export function GetSocketIOServer(): IOServer | undefined {
  return (global as any).io;
}
