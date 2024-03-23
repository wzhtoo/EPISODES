import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export function checkAuth(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).redirect("/signin.html");
  }

  jwt.verify(token, "3AP6RJlW60Qtt3wsUnGp", (err: any) => {
    if (err) {
      return res.status(401).send("Unauthorized");
    }
    next();
  });
}
