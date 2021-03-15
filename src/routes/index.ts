import { Router } from "express";
import posts from "./posts";
import images from "./images";

export const appRouter = Router();

appRouter.use("/posts", posts);
appRouter.use("/images", images);
