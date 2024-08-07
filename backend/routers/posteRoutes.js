import express from "express";
import { getPosts } from "../controllers/postController.js";

const router = express.Router();

router.get("/posts", getPosts);
// router.post("/:id", comments);
// router.post("/:id", likes);

export default router;
