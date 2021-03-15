import request from "supertest";
import { Application } from "express";
import createAppServer from "../../../src/server/server";
import { postsDb } from "../../../src/db";

describe("/api/posts route", () => {
  let app: Application = createAppServer();

  it("should return []", (done) => {
    request(app).get("/api/posts").expect(200, postsDb, done);
  });
});
