import express from "express";
import jwt from "jsonwebtoken";
import {
  getAuthors,
  getBooks,
  getAuthorById,
  deleteAuthor,
  addAuthor,
  getBookById,
  deleteBook,
  addBook,
  updateBook,
} from "../controller/Controller.js";
import { authenticateToken, loginUser, registerUser } from "../controller/UserController.js";

const router = express.Router();

router.get("/authors",authenticateToken, getAuthors);
router.get("/authors/:id", authenticateToken, getAuthorById);
router.delete("/authors/:id", authenticateToken, deleteAuthor);
router.post("/authors", authenticateToken, addAuthor);
router.get("/books", authenticateToken, getBooks);
router.get("/books/:id", authenticateToken, getBookById);
router.delete("/books/:id",authenticateToken, deleteBook);
router.post("/books",authenticateToken, addBook);
router.put("/books/:id",authenticateToken, updateBook);
router.post("/login", loginUser)
router.post("/register", registerUser)
router.post("/verifyToken", (req, res) => {
  const token = req.body.token;

  jwt.verify(token, 'secret_key', (err, user) => {
    if (err) {
      res.json({ valid: false });
    } else {
      res.json({ valid: true });
    }
  });
});

export default router;
