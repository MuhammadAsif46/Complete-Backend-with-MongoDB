require("dotenv").config();
const express = require("express");
const app = express();

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

app.get("/github", (req, res) => {
  res.json(githubData);
});

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
