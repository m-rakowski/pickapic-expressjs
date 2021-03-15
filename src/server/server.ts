import express, { response } from "express";
import { Application, Request, Response, NextFunction } from "express";
import { appRouter } from "../routes";

export default function createAppServer() {
  const app: Application = express();
  app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("hello world");
  });

  app.use(appRouter);
  return app;
}
