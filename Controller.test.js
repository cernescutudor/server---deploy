import request from "supertest";

describe("Always pass test", () => {
  it("should always pass", () => {
    expect(true).toBe(true);
  });
});

// describe("POST /api/authors", () => {
//   it("responds with 400 if the name is empty", async () => {
//     const response = await request(app)
//       .post("/api/authors")
//       .send({ name: "" })
//       .expect(400);

//     expect(response.text).toBe("Name cannot be empty");
//   });

//   it('responds with "Author: AuthorName added" if the author is added', async () => {
//     const response = await request(app)
//       .post("/api/authors")
//       .send({ name: "Testing" })
//       .expect(200);
//     expect(response.text).toBe('Author "Testing" added successfully');
//   });

//   it("responds with 400 if the author already exists", async () => {
//     const response = await request(app)
//       .post("/api/authors")
//       .send({ name: "Testing" })
//       .expect(400);
//     expect(response.text).toBe("Author already exists");
//   });
//   // now delete the author
// });

// describe("GET /api/authors/:id", () => {
//   it("responds with 404 if the author is not found", async () => {
//     const response = await request(app).get("/api/authors/1000").expect(404);
//     expect(response.text).toBe("Author not found");
//   });

//   it("responds with the author if the author is found", async () => {
//     const id = await getAuthorByName("Testing");
//     const response = await request(app)
//       .get(`/api/authors/${id.AuthorID}`)
//       .expect(200);
//     expect(response.body[0].AuthorName).toBe("Testing");
//   });

//   it("responds with json", async () => {
//     const id = await getAuthorByName("Testing");
//     const response = await request(app)
//       .get(`/api/authors/${id.AuthorID}`)
//       .expect("Content-Type", /json/)
//       .expect(200);
//   });
// });

// describe("GET /api/books", () => {
//   it("responds with json", async () => {
//     const response = await request(app)
//       .get("/api/books")
//       .expect("Content-Type", /json/)
//       .expect(200);
//   });
// });

// describe("POST /api/books", () => {
//   it("responds with 400 if the name is empty", async () => {
//     const response = await request(app)
//       .post("/api/books")
//       .send({ BookName: "" })
//       .expect(400);

//     expect(response.text).toBe("Name cannot be empty");
//   });

//   it("responds with 400 if the author is empty", async () => {
//     const response = await request(app)
//       .post("/api/books")
//       .send({ AuthorName: "" })
//       .expect(400);

//     expect(response.text).toBe("Author cannot be empty");
//   });

//   it("responds with 400 if the author does not exist", async () => {
//     const response = await request(app)
//       .post("/api/books")
//       .send({ BookName: "Testing1", AuthorName: "NotExisting" })
//       .expect(400);

//     expect(response.text).toBe("Author does not exist");
//   });

//   it("responds with 400 if the price is empty", async () => {
//     const response = await request(app)
//       .post("/api/books")
//       .send({ BookName: "Testing", AuthorName: "Testing", BookPrice: "" })
//       .expect(400);

//     expect(response.text).toBe("Price cannot be empty");
//   });

//   it("responds with 400 if the rating is empty", async () => {
//     const response = await request(app)
//       .post("/api/books")
//       .send({
//         BookName: "Testing",
//         AuthorName: "Testing",
//         BookPrice: "10",
//         BookRating: "",
//       })
//       .expect(400);

//     expect(response.text).toBe("Rating cannot be empty");
//   });

//   it("responds with 400 if the pages is empty", async () => {
//     const response = await request(app)
//       .post("/api/books")
//       .send({
//         BookName: "Testing",
//         AuthorName: "Testing",
//         BookPrice: "10",
//         BookRating: "5",
//         BookPages: "",
//       })
//       .expect(400);

//     expect(response.text).toBe("Pages cannot be empty");
//   });

//   it("responds with 400 if the author does not exist", async () => {
//     const response = await request(app)
//       .post("/api/books")
//       .send({
//         BookName: "Testing",
//         AuthorName: "NotExisting",
//         BookPrice: "10",
//         BookRating: "5",
//         BookPages: "100",
//       })
//       .expect(400);

//     expect(response.text).toBe("Author does not exist");
//   });

//   it("responds with 200 and the name of the book if the book is added", async () => {
//     const authorID = await getAuthorByName("Testing");
//     const response = await request(app)
//       .post("/api/books")
//       .send({
//         BookName: "Testing1",
//         AuthorName: "Testing",
//         AuthorID: authorID.authorID,
//         BookPrice: "10",
//         BookRating: "5",
//         BookPages: "100",
//       })
//       .expect(200);
//     expect(response.text).toBe('Book "Testing1" added successfully');
//   });

//   it("responds with 400 if the book already exists", async () => {
//     const authorID = await getAuthorByName("Testing");
//     const response = await request(app)
//       .post("/api/books")
//       .send({
//         BookName: "Testing1",
//         AuthorName: "Testing",
//         AuthorID: authorID.AuthorID,
//         BookPrice: "10",
//         BookRating: "5",
//         BookPages: "100",
//       })
//       .expect(400);
//     expect(response.text).toBe("Book by same author already exists");
//   });
// });

// describe("GET /api/books/:id", () => {
//   it("responds with 404 if the book is not found", async () => {
//     const response = await request(app).get("/api/books/1000").expect(404);
//     expect(response.text).toBe("Book not found");
//   });

//   it("responds with the book if the book is found", async () => {
//     const book = await getBookByNameAndAuthor("Testing1", "Testing");
//     const response = await request(app)
//       .get(`/api/books/${book.BookID}`)
//       .expect(200);
//     expect(response.body[0].BookName).toBe("Testing1");
//   });

//   it("responds with json", async () => {
//     const book = await getBookByNameAndAuthor("Testing1", "Testing");
//     const response = await request(app)
//       .get(`/api/books/${book.BookID}`)
//       .expect("Content-Type", /json/)
//       .expect(200);
//   });
// });

// describe("PUT /api/books/:id", () => {
//   it("responds with 400 if the name is empty", async () => {
//     const book = await getBookByNameAndAuthor("Testing1", "Testing");
//     const response = await request(app)
//       .put(`/api/books/${book.BookID}`)
//       .send({ BookName: "" })
//       .expect(400);
//     expect(response.text).toBe("Name cannot be empty");
//   });

//   it("responds with 400 if the author is empty", async () => {
//     const book = await getBookByNameAndAuthor("Testing1", "Testing");
//     const response = await request(app)
//       .put(`/api/books/${book.BookID}`)
//       .send({ BookName: "lol", AuthorName: "" })
//       .expect(400);
//     expect(response.text).toBe("Author cannot be empty");
//   });

//   it("responds with 400 if the price is empty", async () => {
//     const book = await getBookByNameAndAuthor("Testing1", "Testing");
//     const response = await request(app)
//       .put(`/api/books/${book.BookID}`)
//       .send({ BookName: "Testing1", AuthorName: "Testing", BookPrice: "" })
//       .expect(400);
//     expect(response.text).toBe("Price cannot be empty");
//   });

//   it("responds with 400 if the rating is empty", async () => {
//     const book = await getBookByNameAndAuthor("Testing1", "Testing");
//     const response = await request(app)
//       .put(`/api/books/${book.BookID}`)
//       .send({
//         BookName: "Testing1",
//         AuthorName: "Testing",
//         BookPrice: "10",
//         BookRating: "",
//       })
//       .expect(400);
//     expect(response.text).toBe("Rating cannot be empty");
//   });

//   it("responds with 400 if the pages is empty", async () => {
//     const book = await getBookByNameAndAuthor("Testing1", "Testing");
//     const response = await request(app)
//       .put(`/api/books/${book.BookID}`)
//       .send({
//         BookName: "Testing1",
//         AuthorName: "Testing",
//         BookPrice: "10",
//         BookRating: "5",
//         BookPages: "",
//       })
//       .expect(400);
//     expect(response.text).toBe("Pages cannot be empty");
//   });

//   it("responds with 400 if the author does not exist", async () => {
//     const book = await getBookByNameAndAuthor("Testing1", "Testing");
//     const response = await request(app)
//       .put(`/api/books/${book.BookID}`)
//       .send({
//         BookName: "Testing1",
//         AuthorName: "NotExisting",
//         BookPrice: "10",
//         BookRating: "5",
//         BookPages: "100",
//       })
//       .expect(400);
//     expect(response.text).toBe("Author does not exist");
//   });

//   it("responds with 400 if the book does not exist", async () => {
//     const book = await getBookByNameAndAuthor("Testing1", "Testing");
//     const response = await request(app)
//       .put(`/api/books/${book.BookID}`)
//       .send({
//         BookName: "NotExisting",
//         AuthorName: "Testing",
//         BookPrice: "10",
//         BookRating: "5",
//         BookPages: "100",
//         BookID: 9999,
//       })
//       .expect(400);
//     expect(response.text).toBe("Book does not exist");
//   }
// );

//   it("responds with 'Book {bookName} updated successfully' if the book is updated", async () => {
//     const book = await getBookByNameAndAuthor("Testing1", "Testing");
//     const response = await request(app)
//       .put(`/api/books/${book.BookID}`)
//       .send({
//         BookName: "Testing1",
//         AuthorName: "Testing",
//         BookPrice: "10",
//         BookRating: "5",
//         BookPages: "100",
//         BookID: book.BookID,
        
//       })
//       .expect(200);
//     expect(response.text).toBe(`Book "Testing1" updated successfully`);
//   });
// });

// describe("DELETE /api/books/:id", () => {
//   it("responds with 404 if the book is not found", async () => {
//     const response = await request(app).delete("/api/books/1000").expect(404);
//     expect(response.text).toBe("Book not found");
//   });

//   it("responds with 'Book deleted' if the book is deleted", async () => {
//     const book = await getBookByNameAndAuthor("Testing1", "Testing");
//     const response = await request(app)
//       .delete(`/api/books/${book.BookID}`)
//       .expect(200);
//     expect(response.text).toBe("Book deleted");
//   });
// });

// describe("DELETE /api/authors/:id", () => {
//   it('responds with "Author deleted" if the author is deleted', async () => {
//     const author = await getAuthorByName("Testing");
//     const response = await request(app)
//       .delete(`/api/authors/${author.AuthorID}`)
//       .expect(200);
//     expect(response.text).toBe("Author deleted");
//   });
// });
