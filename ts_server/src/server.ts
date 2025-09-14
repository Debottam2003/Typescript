// "dev": "npx ts-node-dev --respawn --transpile-only src/server.ts",
import express from "express";
import router from "./routes/router.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// console.log(router);

app.use(router);

app.listen(5000, "127.0.0.1", () => {
  console.log("Server is running on http://127.0.0.1:5000");
});
