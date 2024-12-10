import express from "express";
import http from "http";
import cors from "cors";

import { storyData } from "./data";

const PORT = 8080;

const app = express();

app.use(cors());

app.get("/stories", (req, res) => {
  res.send(storyData);
});

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
