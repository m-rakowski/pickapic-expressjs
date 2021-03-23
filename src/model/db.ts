import { Post } from "./post";

export interface Db {
  addOnePost(newPost: Post): Post;

  getPost(postId?: string): Post | undefined;

  getPosts(): Post[];

  getId(): string;
}
