import express from "express";
import fs from "fs";
import { cwd } from "process";
import cors from "cors";

const app = express();
app.use(cors());

app.listen(3000, console.log("server started on 3000"));

app.get("/description", (req, res) => {
  fs.readFile(`${cwd()}/data.json`, "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

app.get("/", (req, res) => res.send("hello world"));
