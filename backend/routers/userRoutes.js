import express from "express";
import {
  followUnfollowUser,
  login,
  signupUser,
  logout,
  editProfile,
} from "../controllers/userController.js";
import protectRouts from "../meddlewares/protectRouts.js";

const router = express.Router();
router.post("/signup", signupUser);
router.post("/login", login);
router.post("/logout", logout);
router.post("/edit/:id", editProfile);
router.post("/follow/:id", protectRouts, followUnfollowUser);

export default router;
