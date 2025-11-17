import express from "express";
import type { Request, Response, NextFunction } from "express";

const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
  next();
});

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello world");
});

app.listen(3333, () => {
  console.log("The server is running on http://localhost:3333");
});
