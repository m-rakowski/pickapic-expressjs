const express = require("express");
const app = express();
app.use(express.json());

const posts = [{ id: 1 }, { id: 2 }];

app.get("/", (req, res) => {
  res.send("Hello world!!!");
});

app.get("/api/posts", (req, res) => {
  res.send(posts);
});

app.post("/api/posts", (req, res) => {
  const newPost = req.body;
  if (posts.find((post) => newPost.id === post.id)) {
    res.status(409).send("Post with id=" + newPost.id + " already exists");
  } else {
    posts.push(newPost);
    res.send(posts.find((post) => newPost.id === post.id));
  }
});

app.get("/api/posts/:id", (req, res) => {
  res.send(posts.find((post) => req.params.id === post.id));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`it's alive on http://localhost:${port}`));
