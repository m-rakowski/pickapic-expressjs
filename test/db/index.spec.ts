// import { expect } from "chai";
// import { Post } from "../../src/model/post";
// import createDb from "../../src/db";
// import { Db } from "../../src/model/db";
//
// describe("database", () => {
//
//   it("should get posts", () => {
//     expect(db.getPosts()).to.eql([]);
//   });
//
//   it("should add post", () => {
//     const addedPost: Post = db.addOnePost({ question: "this or that" });
//     expect(db.getPosts()).to.have.length(1);
//     expect(db.getPosts()[0].question).to.eql("this or that");
//     expect(db.getPosts()[0].postId).to.eql(addedPost.postId);
//   });
//
//   it("should get post", () => {
//     db.addOnePost({ question: "this or that" });
//     const post = db.getPosts()[0];
//     expect(db.getPost(post.postId)).to.eql(post);
//   });
// });
