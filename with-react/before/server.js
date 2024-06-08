const express = require("express");
const shuffle = require("lodash.shuffle");
const booksData = require("./books.json");

const app = express();
const port = 4000;

// Middleware to parse JSON data
app.use(express.json());

// Routes
app.get("/api/books", (req, res) => {
  const limit = Number(req.query.limit || 10);
  const offset = Number(req.query.offset || 0);
  const books = booksData.slice(offset, offset + limit);
  res.json(books);
});

app.get("/api/books/random", (req, res) => {
  const [book] = shuffle(booksData);
  res.json(book);
});

app.post("/api/books", (req, res) => {
  const { title, author } = req.body;
  const newBook = { id: booksData.length + 1, title, author };
  booksData.push(newBook);
  res.status(201).json(newBook);
});

app.get("/api/books/:id", (req, res) => {
  const { id } = req.params;
  const book = booksData.find((book) => book.id === Number(id));
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ error: "Book not found" });
  }
});

app.patch("/api/books/:id", (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;
  const book = booksData.find((book) => book.id === Number(id));
  if (book) {
    book.title = title;
    book.author = author;
    res.json(book);
  } else {
    res.status(404).json({ error: "Book not found" });
  }
});

app.delete("/api/books/:id", (req, res) => {
  const { id } = req.params;
  const index = booksData.findIndex((book) => book.id === Number(id));
  if (index !== -1) {
    const deletedBook = booksData.splice(index, 1)[0];
    res.json(deletedBook);
  } else {
    res.status(404).json({ error: "Book not found" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
