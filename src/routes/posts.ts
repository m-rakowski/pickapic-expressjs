import { NextFunction, Request, Response, Router } from "express";

const router = Router();

// @route GET /posts
// @desc Authenticates a user
// @access PUBLIC
router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send(200);
});

export default router;
