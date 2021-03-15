import request from "supertest";
import { Application } from "express";
import createAppServer from "../../../src/server/server";

describe("/api/images route", () => {
  let app: Application = createAppServer();

  it("should respond with 200", (done) => {
    request(app).get("/api/images").expect(200, done);
  });
});
