import { Response, Request } from "express";

const r = require("rethinkdb");

const express = require("express");
const app = express();

app.get('/', (req: Request, res: Response) => {

    res.send("Hello");
});

app.listen(8080);
console.log("Listening on port 8080");
