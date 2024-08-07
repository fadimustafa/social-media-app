import { db } from "../db/connectDB.js";
import jwt from "jsonwebtoken";

export const getPosts = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in");

  jwt.verify(token, TOKEN_KEY, (err, userInfo) => {
    if (err) return res.status(403).json("Token is Invalied");
  });
  const q = `SELECT p.*, u.id 
  AS userId, profilename, profilePic
  FROM posts AS p
  JOIN users AS u
  ON (u.id = p.userId)
  `;
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};
