import { db } from "../db/connectDB.js";
import bcrypt from "bcryptjs";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";

export const signupUser = async (req, res) => {
  //CHAKE IF THE USER EXIST !!
  const { username, email, password, profilename } = req.body;
  const q = `SELECT * FROM users WHERE username = ? `;
  db.query(q, [username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(400).json("user already exist");

    //PASSWORD HASHING
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    //CREATE NEW USER
    const q2 =
      "INSERT INTO users (`username`,`email`,`password`,`profilename`) VALUE (?)";
    const value = [username, email, hashedPassword, profilename];
    db.query(q2, [value], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("user has been created");
    });
  });
};

export const login = (req, res) => {
  try {
    const q = "SELECT * FROM users WHERE username = ?";
    db.query(q, [req.body.username], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length === 0)
        return res.status(404).json("this user dos'n exist");

      const chackPassword = bcrypt.compareSync(
        req.body.password,
        data[0].password
      );
      if (!chackPassword)
        return res.status(400).json("wrong password or user name");
      const toke = jwt.sign({ id: data[0].id }, process.env.TOKEN_KEY, {
        expiresIn: "12d",
      });

      const { password, ...others } = data[0];
      res
        .cookie("jwt", toke, {
          httpOnly: true,
          maxAge: 11 * 24 * 60 * 60 * 3000, //15 days
          sameSite: "strict",
        })
        .status(200)
        .json(others);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("error in login: " + err.message);
  }
};

export const logout = (req, res) => {
  res
    .clearCookie("accessToken", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json("user has been logged out");
};

export const followUnfollowUser = (req, res) => {
  try {
    const { id } = req.params;
    const q = `SELECT * FROM users WHERE id = ?`;
    const q2 = `SELECT followers FROM users WHERE id = ?`;
    const userToModify = db.query(q, id);
    const currentUser = db.query(q, [req.body.id]);
    const isFollowing = db.query(q2, currentUser);
    if (id === currentUser)
      return res
        .status(400)
        .json({ message: "you can't follow/unfollow your self" });

    if (!userToModify || !currentUser)
      return res.status(400).json({ message: "user not found!" });

    if (isFollowing) {
      const q = "DELETE FROM relashin WHERE folowerUserID = ?";
      db.query(q, userToModify, (err, data) => {
        if (err)
          return res
            .status(500)
            .json(err + " somthing went wrong with following");
        if (data) return res.status(200).json(`you unfollowed ${userToModify}`);
      });
    } else {
      const q = "INSERT INTO `relashin` (folowerUserID) VALUE = ?";
      db.query(q, userToModify, (err, data) => {
        if (err)
          return res
            .status(500)
            .json(err + " somthing went wrong with following");
        if (data) return res.status(200).json(`you followed ${userToModify}`);
      });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("error in followUnfollowUser: " + err.message);
  }
};

export const editProfile = async (req, res) => {
  try {
    const { profilename, profilePic, bio, email, id } = req.body;
    const q = `UPDATE users SET profilename = ? , profilePic = ? ,bio = ? , email = ?  WHERE id = ? `;
    const values = [profilename, profilePic, bio, email, id];
    await db.query(q, values, (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("update complet");
    });
  } catch (err) {}
};
