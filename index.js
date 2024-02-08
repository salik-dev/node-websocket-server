import express from "express";

import { WebSocketServer } from "ws";

const app = express();
const port = 8080;

const server = app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
const wSS = new WebSocketServer({ server });
wSS.on("connection", (ws) => {
  ws.on("message", (data) => {
    console.log(`Data from client connected: ${data}`);
    console.log("thanks buddy");
  });
});
