// const productSchema = new sql.Schema({
//     id: sql.Int,
//     category: sql.VarChar(50),
//     price: sql.Decimal(18, 2),
//     stocked: sql.Bit,
//     name: sql.VarChar(50),
//     });
// this is for future reference

import { faker } from "@faker-js/faker";

let PRODUCTS = [
  { id: 1, category: "Fruits", price: "1.5", stocked: true, name: "Apple" },
  { id: 2, category: "Fruits", price: "1", stocked: true, name: "Dragonfruit" },
  {
    id: 3,
    category: "Fruits",
    price: "2",
    stocked: false,
    name: "Passionfruit",
  },
  { id: 4, category: "Vegetables", price: "2", stocked: true, name: "Spinach" },
  {
    id: 5,
    category: "Vegetables",
    price: "4",
    stocked: false,
    name: "Pumpkin",
  },
  { id: 6, category: "Vegetables", price: "1", stocked: true, name: "Peas" },
  { id: 7, category: "Dairy", price: "3", stocked: true, name: "Milk" },
  { id: 8, category: "Dairy", price: "2", stocked: false, name: "Cheese" },
  { id: 9, category: "Dairy", price: "1", stocked: true, name: "Yogurt" },
  { id: 10, category: "Bakery", price: "2", stocked: true, name: "Bread" },
  { id: 11, category: "Bakery", price: "3", stocked: false, name: "Cake" },
  { id: 12, category: "Bakery", price: "1", stocked: true, name: "Muffin" },
];

let AUTHORS = [
  { id: 1, name:"Fyodor Dostoevsky", rating :0, book_count:0 },
  { id: 2, name:"Leo Tolstoy", rating :0, book_count:0 },
  { id: 3, name:"William Shakespeare", rating :0, book_count:0 },
  { id: 4, name:"Jane Austen", rating :0, book_count:0 },
  { id: 5, name:"Charles Dickens", rating :0, book_count:0 },
  { id: 6, name:"Mark Twain", rating :0, book_count:0 },
  { id: 7, name:"Homer", rating :0, book_count:0 },
  { id: 8, name:"George Orwell", rating :0, book_count:0 },
  { id: 9, name:"J.R.R. Tolkien", rating :0, book_count:0 },
  { id: 10, name:"Ernest Hemingway", rating :0, book_count:0 },
  { id: 11, name:"Franz Kafka", rating :0, book_count:0 },
  { id: 12, name:"F. Scott Fitzgerald", rating :0, book_count:0 },
]

let BOOKS = [
  { id: 1, title: "Crime and Punishment", author: "Fyodor Dostoevsky", rating: 7.5, pages: 545, genre: "Fiction" },
  { id: 2, title: "War and Peace", author: "Leo Tolstoy", rating: 8.5, pages: 1225, genre: "Fiction" },
  { id: 3, title: "Hamlet", author: "William Shakespeare", rating: 9.5, pages: 200, genre: "Drama" },
  { id: 4, title: "Pride and Prejudice", author: "Jane Austen", rating: 7.5, pages: 300, genre: "Romance" },
  { id: 5, title: "Oliver Twist", author: "Charles Dickens", rating: 7.0, pages: 500, genre: "Fiction" },
  { id: 6, title: "The Adventures of Tom Sawyer", author: "Mark Twain", rating: 8.0, pages: 350, genre: "Adventure" },
  { id: 7, title: "The Odyssey", author: "Homer", rating: 9.0, pages: 400, genre: "Epic" },
  { id: 8, title: "1984", author: "George Orwell", rating: 8.5, pages: 250, genre: "Dystopian" },
  { id: 9, title: "The Hobbit", author: "J.R.R. Tolkien", rating: 8.0, pages: 300, genre: "Fantasy" },
  { id: 10, title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", rating: 9.0, pages: 800, genre: "Fiction" },
  { id: 11, title: "The Metamorphosis", author: "Franz Kafka", rating: 8.0, pages: 100, genre: "Fiction" },
  { id: 12, title: "The Great Gatsby", author: "F. Scott Fitzgerald", rating: 7.5, pages: 200, genre: "Fiction" },
  { id: 13, title: "White Nights", author: "Fyodor Dostoevsky", rating: 7.0, pages: 150, genre: "Fiction" },
  { id: 14, title: "Notes from Underground", author: "Fyodor Dostoevsky", rating: 8.0, pages: 200, genre: "Fiction" },
  { id: 15, title: "Anna Karenina", author: "Leo Tolstoy", rating: 9.0, pages: 700, genre: "Fiction" },
  { id: 16, title: "The Idiot", author: "Fyodor Dostoevsky", rating: 8.5, pages: 600, genre: "Fiction" },
];



function author_rating(){
  for (let i = 0; i < BOOKS.length; i++) {
    for (let j = 0; j < AUTHORS.length; j++) {
      if (BOOKS[i].author === AUTHORS[j].name) {
        AUTHORS[j].rating += BOOKS[i].rating;
        AUTHORS[j].book_count+= 1;
      }
    }
  }
  for (let i = 0; i < AUTHORS.length; i++) {
    AUTHORS[i].rating = AUTHORS[i].rating / AUTHORS[i].book_count;
  }
}

// let valid_id = PRODUCTS[PRODUCTS.length - 1].id + 1;

// function generateProduct(number_of_prod) {
//   let categories = ["Fruits", "Vegetables", "Dairy", "Bakery"];
//   for (let i = 0; i < 20; i++) {
//     let random_boolean = Math.random() >= 0.5;
//     let random_category =
//       categories[Math.floor(Math.random() * categories.length)];
//     let product = {
//       id: valid_id,
//       category: random_category,
//       price: faker.number.int({ min: 1, max: 20 }).toString(),
//       stocked: random_boolean,
//       name: faker.commerce.productName(),
//     };
//     PRODUCTS.push(product);
//     valid_id++;
//   }
// }
// generateProduct(20);
author_rating();

PRODUCTS = AUTHORS;
export { AUTHORS, BOOKS };
