const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);

app.get("/status", async (req, res) => {
  res.status(200).json({ message: "Ready!, Up and running" });
});
server.listen(6000, () => {
  console.log("server running ");
});
