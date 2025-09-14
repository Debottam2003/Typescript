import { Router } from "express";
const router = Router();
router.route("/").get((req, res) => {
    console.log(req.headers);
    console.log("hello world");
    res.send("hello world");
});
export default router;
