import express from "express";
import type { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  console.log("req came");
  res.send("hello world!");
});

app.listen(3333, () => {
  console.log("server is listening and serving on http://localhost:3333");
});
