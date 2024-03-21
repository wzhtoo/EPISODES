import express, { Request, Response } from "express";
import fs from "fs";

const PORT = 5000;
const app = express();
app.use(express.json());
app.use(express.text());

app.listen(PORT, () => console.log(`Server has started listening on ${PORT}`));

app.get("/", (req: Request, res: Response) => {
  // const data = fs.readFileSync("appData.json");
  const data = fs.readFileSync("appData.json");
  res.send(data.toString());
  // res.send(JSON.stringify(data));
  // res.send(data.toString());
  // res.send({ id: 1, name: "Ko Ko", age: 23 });
});

app.post("/", (req: Request, res: Response) => {
  const data = req.body;
  fs.writeFileSync("appData.json", JSON.stringify(data));
  // fs.writeFileSync("appData.json", JSON.stringify(data));
  res.send("Save File");
});

app.put("/", (req: Request, res: Response) => {
  const data = req.body;
  const existingData = JSON.parse(fs.readFileSync("appData.json").toString());
  const newData = [...existingData, data];
  fs.writeFileSync("appData.json", JSON.stringify(newData));
  res.send(`Received: ${req.method}`);
});

app.delete("/", (req: Request, res: Response) => {
  const { name } = req.query;
  const filename = name as string;
  fs.unlink(filename, (err) => {
    console.log(err);
    res.send(`Received: ${req.method}`);
  });
});

// Handling HEAD request
app.head("/", (req, res) => {
  // This method is often used to check if a resource exists without sending its content
  res.status(200).end();
});

// Handling OPTIONS request
app.options("/", (req, res) => {
  // This method is used to describe the communication options for the target resource
  res.setHeader("Allow", "GET, POST, PUT, DELETE");
  res.status(200).end();
});
