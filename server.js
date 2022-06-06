import http from "http";
import { readFileSync, writeFileSync } from "fs";
import dotenv from "dotenv";
import { FindlestId } from "./utility/function.js";

//developmet init
dotenv.config();
const port = process.env.APP_PORT;

// Data Managment
const student_json = readFileSync("./data/student.json");
const student_obj = JSON.parse(student_json);

// https server setup
http
  .createServer((req, res) => {
    // Routeing setup
    if (req.url == "/api/student" && req.method == "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(student_json);
    } else if (req.url.match(/\/api\/student\/[0-9]{1,}/) && req.method == "GET") {
      let id = req.url.split("/")[3];

      if (student_obj.find((stu) => stu.id == id)) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(student_obj.find((stu) => stu.id == id)));
      } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            Message: "Data Not Found",
          })
        );
      }
    } else if (req.url == "/api/student" && req.method == "POST") {
      //req data handle
      let data = "";
      req.on("data", (chunk) => {
        data += chunk.toString();
      });
      req.on("end", () => {
        let { name, age, skill, location } = JSON.parse(data);
        student_obj.push({
          id: FindlestId(student_obj),
          name: name,
          age: age,
          skill: skill,
          location: location,
        });
        writeFileSync("./data/student.json", JSON.stringify(student_obj));
      });

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          Message: "Data Added secessful",
        })
      );
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          Error: "Invalid Data",
        })
      );
    }
  })
  .listen(port, () => {
    console.log(`server is ready on port ${port}`);
  });
