require("dotenv").config();
const express = require("express");
const app = express();

const githubData = {
  login: "MuhammadAsif46",
  id: 125912946,
  node_id: "U_kgDOB4FHcg",
  avatar_url: "https://avatars.githubusercontent.com/u/125912946?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/MuhammadAsif46",
  html_url: "https://github.com/MuhammadAsif46",
  followers_url: "https://api.github.com/users/MuhammadAsif46/followers",
  following_url:
    "https://api.github.com/users/MuhammadAsif46/following{/other_user}",
  gists_url: "https://api.github.com/users/MuhammadAsif46/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/MuhammadAsif46/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/MuhammadAsif46/subscriptions",
  organizations_url: "https://api.github.com/users/MuhammadAsif46/orgs",
  repos_url: "https://api.github.com/users/MuhammadAsif46/repos",
  events_url: "https://api.github.com/users/MuhammadAsif46/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/MuhammadAsif46/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Muhammad Asif",
  company: null,
  blog: "asifahmed32c@gmail.com",
  location: "Karachi, Pakistan",
  email: null,
  hireable: null,
  bio: "Passionate MERN Stack Developer. Crafting interactive web apps with MongoDB, Express, React, Node.js | Lifelong learner and coder.",
  twitter_username: null,
  public_repos: 101,
  public_gists: 0,
  followers: 29,
  following: 13,
  created_at: "2023-02-20T18:07:38Z",
  updated_at: "2024-12-03T07:13:27Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/login", (req, res) => {
  res.send("Login successfully!");
});
app.get("/user", (req, res) => {
  res.send("<h1>Welcome user!</h1>");
});

app.get("/logout", (req, res) => {
  res.send("<h2>Logout successfully!</h2>");
});

app.get("/github",(req,res)=>{
    res.json(githubData)
})

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
