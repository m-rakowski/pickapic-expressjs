import { Post } from "../model/post";
import { v4 as uuidv4 } from "uuid";
import { Db } from "../model/db";

class LocalDb implements Db {
  private _posts: Post[] = [];
  private _id: string;

  getId(): string {
    return this._id;
  }

  constructor() {
    this._id = uuidv4();
  }

  addOnePost(newPost: Post): Post {
    newPost.postId = uuidv4();
    this._posts.push(newPost);
    return newPost;
  }

  getPost(postId?: string): Post | undefined {
    return this._posts.find((post) => post.postId === postId);
  }

  getPosts() {
    return this._posts;
  }
}

export default function dbConnect() {
  return new Promise((resolve, reject) => {
    resolve("foo");
  });
}
