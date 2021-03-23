import request from "supertest";
import { Application } from "express";
import createAppServer from "../../../src/server/server";
import { expect } from "chai";

const app: Application = createAppServer();

describe("/api/posts", () => {
  describe("GET /api/posts", () => {
    it("should return []", (done) => {
      request(app).get("/api/posts").expect(200, [], done);
    });
  });

  describe("POST /api/posts", () => {
    it("should save one post and return it", (done) => {
      request(app)
        .post("/api/posts")
        .set("Accept", "application/json")
        .send({ question: "this or that" })
        .expect(201)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          return done();
        });
    });
  });
});
