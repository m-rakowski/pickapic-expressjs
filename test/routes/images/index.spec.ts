import request from "supertest";
import { Application } from "express";
import createAppServer from "../../../src/server/server";

describe("/images route", () => {
  let app: Application = createAppServer();

  it("should respond with 200", (done) => {
    request(app).get("/images").expect(200, done);
  });
});
