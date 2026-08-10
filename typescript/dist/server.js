"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const cors = require('cors');
let data = require('./data');
const app = express();
app.use(cors());
app.get('/', (req, res) => {
    console.log(data);
    res.send("hello world");
});
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
