import { Router } from "express";
import posts from "./posts";
import images from "./images";

export const appRouter = Router();

appRouter.use("/api/posts", posts);
appRouter.use("/api/images", images);
