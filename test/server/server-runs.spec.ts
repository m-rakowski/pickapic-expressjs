import request from "supertest";
import createAppServer from "../../src/server/server";
import { Application } from "express";

describe("server", () => {
  let app: Application = createAppServer();

  it("should create server", (done) => {
    request(app).get("/").expect(200, done);
  });
});
