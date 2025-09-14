import { Request, Response } from "express";
import { Router } from "express";

const router = Router();

router.route("/").get((req: Request, res: Response) => {
  console.log(req.headers);
  console.log("hello world");
  res.send("hello world");
});

export default router;
