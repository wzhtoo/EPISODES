import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import bcrypt from "bcryptjs";
import fs from "fs";
import jwt from "jsonwebtoken";
import { checkAuth } from "./check";
import cookieParser from "cookie-parser";

const PORT = 5000;
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Load user data from users.json (create the file if it doesn't exist)
let users: { email: string; password: string }[] = [];
try {
  const userData = fs.readFileSync("./data/users.json", "utf-8");
  users = JSON.parse(userData);
} catch (error) {
  users = [];
}

app.post("/signup", (req: Request, res: Response) => {
  const { email, password } = req.body;

  // Validation
  if (!email || !password) {
    return res.status(400).send("Email and Password are required");
  }

  // Hash the password using bcryptjs
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  const newUsers = { email, password: hash };
  users.push(newUsers);

  // Save the update user list to user.json
  fs.writeFileSync("./data/users.json", JSON.stringify(users, null, 2));
  // res.redirect("/signin.html");
  res.status(201).send("User registered sucessfully");
});

app.post("/signin", (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Email and Password are Required!");
  }

  const user = users.find((user) => user.email === email);

  if (!user) {
    return res.status(401).send("User not Found!");
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    return res.status(401).send("Invalid Crendentials");
  }
  // npm install jsonwebtoken
  // npm install @types/jsonwebtoken
  // Create and send a JWT token upon sucessful authentication
  const token = jwt.sign({ email }, "3AP6RJlW60Qtt3wsUnGp", {
    expiresIn: "1h",
  });
  res.cookie("token", token);
  res.redirect("/");
});

// Using checkAuth
app.get("/data", checkAuth, (req: Request, res: Response) => {
  res.sendFile(__dirname + "/data/app-data.json");
});

app.get("/", (req: Request, res: Response) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/logout", (req: Request, res: Response) => {
  res.clearCookie("token");
  res.redirect("/signin.html");
});

app.listen(PORT, () => console.log(`Server is starting listened PORT ${PORT}`));

/* 
Generate Random String
function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

console.log(makeid(5)); */
