import { NextFunction, Request, Response, Router } from "express";
import { Post } from "../model/post";

const router = Router();
// @route GET /posts
// @desc lists posts
// @access PUBLIC
router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Content-Type", "application/json");
  res.send([]);
});

// @route POST /posts
// @desc creates a post
// @access PUBLIC
router.post("/", (req: Request, res: Response, next: NextFunction) => {
  const newPost: Post = req.body;
  res.status(201);
  res.send(newPost);
});

export default router;
