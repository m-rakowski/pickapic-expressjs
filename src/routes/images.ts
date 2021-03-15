import { NextFunction, Request, Response, Router } from "express";

const router = Router();

// @route GET /images
// @desc Displays a images
// @access PUBLIC
router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send([]);
});

export default router;
