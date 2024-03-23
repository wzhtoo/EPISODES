import express, { Request, Response } from "express";
import cors from "cors";

const PORT = 5000;
const app = express();
app.use(cors());

const menus = [
  { id: 1, name: "Shan Khout Swell", price: 2500 },
  { id: 2, name: "Mote hinn Kharr", price: 1200 },
];

app.get("/", (req: Request, res: Response) => {
  res.send(menus);
});

app.listen(PORT, () =>
  console.log(`Server is starting Listening PORT ${PORT}`)
);
