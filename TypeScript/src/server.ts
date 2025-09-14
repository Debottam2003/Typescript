import { Request, Response } from 'express';
const express = require('express');
const cors = require('cors');
let data: number[] = require('./data');

const app = express();

app.use(cors());

app.get('/', (req: Request, res: Response) => {
    console.log(data);
    res.send("hello world");
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
