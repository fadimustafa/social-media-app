import { db } from "../db/connectDB.js";

const protectRouts = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) return res.status(401).json({ message: "unauthorized" });

    const decryptToken = jwt.verify(token, process.env.TOKEN_KEY);
    const q = `SELECT * FROM users WHERE id = ?`;
    const userID = db.query(q, decryptToken.id, (err, data) => {
      if (err) return res.status(500).json(err);
      const { password, ...others } = data[0];
      return res.status(200).json(others);
    });
    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("error in protectRouts: " + err.message);
  }
};

export default protectRouts;
