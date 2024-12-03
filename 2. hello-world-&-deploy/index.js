require("dotenv").config();
const express = require("express");
const app = express();
const port = 5001;

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

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
