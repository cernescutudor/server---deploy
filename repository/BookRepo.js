import sql from "mssql";
import config from "../database/connection_config.js";

export const getBooksDB = async () => {
  try {
    await sql.connect(config);

    // create Request object
    const request = new sql.Request();

    // query to the database and get the records
    const result = await request.query("SELECT * FROM Books");

    return result.recordset;
  } catch (err) {
    console.log(err);
  }
};

export const deleteAllBooksByIdDB = async (id) => {
  try {
    await sql.connect(config);

    // create Request object
    const request = new sql.Request();

    // query to the database and get the records
    const result = await request
      .input("id", sql.Int, id)
      .query("DELETE FROM Books WHERE AuthorID = @id");

    return result.recordset;
  } catch (err) {
    console.log(err);
  }
};

export const getBookByIdDB = async (id) => {
  try {
    await sql.connect(config);

    // create Request object
    const request = new sql.Request();

    // query to the database and get the records
    const result = await request
      .input("id", sql.Int, id)
      .query("SELECT * FROM Books WHERE BookID = @id");

    if (result.recordset.length === 0) {
      return false;
    }

    return result.recordset;
  } catch (err) {
    console.log(err);
  }
};

export const deleteBookWithIdDB = async (id) => {
  try {
    await sql.connect(config);

    // create Request object
    const request = new sql.Request();

    // query to the database and get the records
    const result = await request
      .input("id", sql.Int, id)
      .query("DELETE FROM Books WHERE BookID = @id");


    return result.rowsAffected[0] > 0 ? true : false;
  } catch (err) {
    console.log(err);
  }
};

export const bookByAuthorExistsDB = async (BookName, AuthorName) => {
  try {
    await sql.connect(config);

    // create Request object
    const request = new sql.Request();

    // query to the database and get the records
    const result = await request
      .input("BookName", sql.VarChar, BookName)
      .input("AuthorName", sql.VarChar, AuthorName)
      .query(
        "SELECT * FROM Books WHERE BookName = @BookName AND AuthorName = @AuthorName"
      );

    return result.recordset;
  } catch (err) {
    console.log(err);
  }
};

export const AddBookDB = async (book, Username) => {
  try {
    await sql.connect(config);

    // create Request object
    const request = new sql.Request();

    // query to the database and get the records
    const result = await request
      .input("BookName", sql.VarChar, book.BookName)
      .input("BookRating", sql.Int, book.BookRating)
      .input("BookPrice", sql.Float, book.BookPrice)
      .input("AuthorName", sql.VarChar, book.AuthorName)
      .input("AuthorID", sql.Int, book.AuthorID)
      .input("BookPages", sql.Int, book.BookPages)
      .input("Username", sql.VarChar, Username)
      .query(
        "INSERT INTO Books (BookName, BookRating, BookPrice, AuthorName, AuthorID, BookPages, Username) VALUES (@BookName, @BookRating, @BookPrice, @AuthorName, @AuthorID, @BookPages, @Username)"
      );

    return result.recordset;
  } catch (err) {
    console.log(err);
  }
};

export const updateBookDB = async (book) => {
    try {
        await sql.connect(config);
    
        // create Request object
        const request = new sql.Request();
    
        // query to the database and get the records
        const result = await request
        .input("BookRating", sql.Int, book.BookRating)
        .input("BookPrice", sql.Float, book.BookPrice)
        .input("BookPages", sql.Int, book.BookPages)
        .input("BookID", sql.Int, book.BookID)
        .query(
            "UPDATE Books SET BookRating = @BookRating, BookPrice = @BookPrice, BookPages = @BookPages WHERE BookID = @BookID"
        );
    
        return result.recordset;
    } catch (err) {
        console.log(err);
    }
    }

export const getBookByNameAndAuthorDB = async (BookName, AuthorName) => {
  try {
    await sql.connect(config);

    // create Request object
    const request = new sql.Request();

    // query to the database and get the records
    const result = await request
      .input("BookName", sql.VarChar, BookName)
      .input("AuthorName", sql.VarChar, AuthorName)
      .query(
        "SELECT * FROM Books WHERE BookName = @BookName AND AuthorName = @AuthorName"
      );

    return result.recordset;
  } catch (err) {
    console.log(err);
  }
}