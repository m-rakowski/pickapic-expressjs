import { Application } from "express";
import createAppServer from "./server/server";
import "dotenv/config";

const startServer = () => {
  const app: Application = createAppServer();
  const port: number = parseInt(<string>process.env.PORT, 10) || 4000;
  app.listen(port, () => {
    console.log(`server running on port ${port}`);
  });
};

startServer();
