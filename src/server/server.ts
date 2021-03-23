import express, { Application, NextFunction, Request, Response } from "express";
import { appRouter } from "../routes";
import bodyParser from "body-parser";

export default function createAppServer() {
  const app: Application = express();
  app.use(bodyParser.json());

  app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("hello world");
  });

  app.use(appRouter);
  return app;
}
