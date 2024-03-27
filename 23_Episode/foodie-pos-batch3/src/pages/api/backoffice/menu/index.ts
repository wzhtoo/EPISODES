// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

// Serverless function (file system base routing)
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method;
  if (method === "GET") {
  } else if (method === "POST") {
  } else if (method === "PUT") {
  } else if (method === "DELETE") {
  }
  return res.status(405).send("Not Allowed");
}
