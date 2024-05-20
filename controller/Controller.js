import {
  getAuthorsDB,
  getAuthorByIdDB,
  deleteAuthorByIdDB,
  addAuthorDB,
  getAuthorByNameDB,
  
} from "../repository/AuthorRepo.js";

import { 
  getBooksDB,
  deleteAllBooksByIdDB, 
  getBookByIdDB, 
  deleteBookWithIdDB,
  bookByAuthorExistsDB,
  AddBookDB,
  updateBookDB,
  getBookByNameAndAuthorDB,
} from "../repository/BookRepo.js";



export const getAuthors =  (req, res) => {
   getAuthorsDB().then((authors) => res.json(authors));
};

export const getBooks =  (req, res) => {
   getBooksDB().then((books) => res.json(books));
};

export const getAuthorById = (req, res) => {
  const id = parseInt(req.params.id);
  const product = getAuthorByIdDB(id);
  if(product === false) {
    res.status(404).send("Author not found");
  }
  product.then((product) => {
    if (product) {
      res.json(product);
    } else {
      res.status(404).send("Author not found");
    }
  });
};

export const deleteAuthor = async (req, res) => {
  const id = parseInt(req.params.id);
  //first delete all books by author
  await deleteAllBooksByIdDB(id);

  const Author = await deleteAuthorByIdDB(id);

  if (Author === true) {
    res.send(`Author deleted`);
  } else {
    res.status(404).send("Author not found");
  }
};

export async function validateAuthor_Add(author) {
  if (author === "") {
    return "Name cannot be empty";
  }
  //check if the author already exists
  const authorExists = await getAuthorByNameDB(author);

  if (authorExists.length > 0) {
    return "Author already exists";
  }

  return true;
}

export const addAuthor = async (req, res) => {
  const newAuthor = req.body.name;
  const username = req.body.Username;
  let validationResult = await validateAuthor_Add(newAuthor);

  if (validationResult !== true) {
    res.status(400).send(validationResult);
    return;
  }
  addAuthorDB(newAuthor, username).then((author) =>
    res.send(`Author "${newAuthor}" added successfully`)
  );
};


export const getBookById =  (req, res) => {
  const id = parseInt(req.params.id);
  const book = getBookByIdDB(id);
  if(book===false) {
    res.status(404).send("Book not found");
  }
  book.then((book) => {
    if (book) {
      res.json(book);
    } else {
      res.status(404).send("Book not found");
    }
  });
};

export const deleteBook = async (req, res) => {
  const id = parseInt(req.params.id);
  const book = await deleteBookWithIdDB(id);
  if (book === true) {
    res.send(`Book deleted`);
  } else {
    res.status(404).send("Book not found");
  }
};

const validateBook_Add = async (book) => {
  if (book.BookName === "") {
    return "Name cannot be empty";
  }
  if (book.AuthorName === "") {
    return "Author cannot be empty";
  }
  if (book.BookPrice === "") {
    return "Price cannot be empty";
  }
  if (book.BookRating === "") {
    return "Rating cannot be empty";
  }
  if (book.BookPages === "") {
    return "Pages cannot be empty";
  }
  //check if the author is valid
  const authorExists = await getAuthorByNameDB(book.AuthorName);
  if (authorExists.length === 0) {
    return "Author does not exist";
  }
  const bookExists = await bookByAuthorExistsDB(book.BookName, book.AuthorName);
  if (bookExists.length > 0) {
    return "Book by same author already exists";
  }

  return true;
}

export const addBook = async (req, res) => {
  const newBook = req.body.book;
  const username = req.body.Username;
  let validationResult = await validateBook_Add(newBook);

  if (validationResult !== true) {
    res.status(400).send(validationResult);
    return;
  }
  AddBookDB(newBook, username).then((book) =>
    res.send(`Book "${newBook.BookName}" added successfully`)
  );
};

const validateBook_Update = async (book) => {
  if (book.BookName === "") {
    return "Name cannot be empty";
  }
  if (book.AuthorName === "") {
    return "Author cannot be empty";
  }
  if (book.BookPrice === "") {
    return "Price cannot be empty";
  }
  if (book.BookRating === "") {
    return "Rating cannot be empty";
  }
  if (book.BookPages === "") {
    return "Pages cannot be empty";
  }
  //check if the author is valid
  const authorExists = await getAuthorByNameDB(book.AuthorName);
  console.log(authorExists)
  if (authorExists.length === 0) {
    return "Author does not exist";
  }
  const bookExists = await getBookByIdDB(book.BookID);
  console.log(bookExists)
  if (bookExists === false) {
    return "Book does not exist";
  }

  return true;
}


export const updateBook = async (req, res) => {
  const updatedBook = req.body;
  let validationResult = await validateBook_Update(updatedBook);

  if (validationResult !== true) {
    res.status(400).send(validationResult);
    return;
  }
  updateBookDB(updatedBook).then((book) =>
    res.send(`Book "${updatedBook.BookName}" updated successfully`)
  );
};

export const getBookByNameAndAuthor = async (bookName, authorName) => {
  const book = await getBookByNameAndAuthorDB(bookName, authorName);
  if (book.length > 0) {
    return book[0];
  }
  return null;
}

export const getAuthorByName = async (name) => {
  const author = await getAuthorByNameDB(name);
  if (author.length > 0) {
    return author[0];
  }
  return null;
};
