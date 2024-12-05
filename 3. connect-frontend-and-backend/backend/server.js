import express from "express";

const app = express();

// app.use using (middleware)
// this work is bad practice for production.
app.use(express.static("dist"))

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });


// get a list of jokes:
const jokes = [
  {
    id: 1,
    title: "A joke",
    content: "This is a joke",
  },
  {
    id: 2,
    title: "Another joke",
    content: "This is another joke",
  },
  {
    id: 3,
    title: "A third joke",
    content: "This is a third joke",
  },
  {
    id: 4,
    title: "A fourth joke",
    content: "This is a fourth joke",
  },
  {
    id: 5,
    title: "A fifth joke",
    content: "This is a fifth joke",
  },
];

app.get("/api/jokes", (req, res) => {
  res.json(jokes);
});

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Server running on port ${port}`));
