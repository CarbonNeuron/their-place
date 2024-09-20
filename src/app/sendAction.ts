"use server";

import { GetSocketIOServer } from "@/src/socketIO";

export default async function SendAction() {
  if (!GetSocketIOServer()) {
    console.log("IO is undefined");
    return;
  }
  GetSocketIOServer()?.emit("message", "from server");
}
