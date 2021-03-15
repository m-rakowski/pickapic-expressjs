import { NextFunction, Request, Response, Router } from "express";
import { postsDb } from "../db";

const router = Router();

// @route GET /posts
// @desc Authenticates a user
// @access PUBLIC
router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Content-Type", "application/json");
  res.send(postsDb);
});

export default router;
