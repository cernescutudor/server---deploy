use BookDB;

-- Inserting books for J.K. Rowling
INSERT INTO Books(BookName, BookPrice, BookRating, BookPages, AuthorID, AuthorName) 
VALUES ('Harry Potter and the Philosopher''s Stone', 19.99, 9, 320, 37, 'J.K. Rowling'),
       ('Harry Potter and the Chamber of Secrets', 21.99, 9, 352, 37, 'J.K. Rowling'),
       ('Harry Potter and the Prisoner of Azkaban', 24.99, 9, 464, 37, 'J.K. Rowling');

-- Inserting books for Fyodor Dostoevsky
INSERT INTO Books(BookName, BookPrice, BookRating, BookPages, AuthorID, AuthorName) 
VALUES ('Crime and Punishment', 16.99, 8, 576, 38, 'Fyodor Dostoevsky'),
       ('The Brothers Karamazov', 18.99, 9, 824, 38, 'Fyodor Dostoevsky');

-- Inserting books for Leo Tolstoy
INSERT INTO Books(BookName, BookPrice, BookRating, BookPages, AuthorID, AuthorName) 
VALUES ('War and Peace', 29.99, 10, 1225, 39, 'Leo Tolstoy'),
       ('Anna Karenina', 23.99, 9, 864, 39, 'Leo Tolstoy');

-- Inserting books for Jane Austen
INSERT INTO Books(BookName, BookPrice, BookRating, BookPages, AuthorID, AuthorName) 
VALUES ('Pride and Prejudice', 14.99, 9, 432, 40, 'Jane Austen'),
       ('Sense and Sensibility', 13.99, 8, 384, 40, 'Jane Austen');

-- Inserting books for George Orwell
INSERT INTO Books(BookName, BookPrice, BookRating, BookPages, AuthorID, AuthorName) 
VALUES ('1984', 17.99, 10, 328, 41, 'George Orwell'),
       ('Animal Farm', 12.99, 9, 144, 41, 'George Orwell');

-- Inserting books for Harper Lee
INSERT INTO Books(BookName, BookPrice, BookRating, BookPages, AuthorID, AuthorName) 
VALUES ('To Kill a Mockingbird', 15.99, 9, 336, 42, 'Harper Lee');

-- Inserting books for J.R.R. Tolkien
INSERT INTO Books(BookName, BookPrice, BookRating, BookPages, AuthorID, AuthorName) 
VALUES ('The Hobbit', 18.99, 9, 320, 42, 'J.R.R. Tolkien'),
       ('The Lord of the Rings', 39.99, 10, 1178, 42, 'J.R.R. Tolkien');

-- Inserting books for Agatha Christie
INSERT INTO Books(BookName, BookPrice, BookRating, BookPages, AuthorID, AuthorName) 
VALUES ('Murder on the Orient Express', 14.99, 9, 256, 43, 'Agatha Christie'),
       ('And Then There Were None', 13.99, 9, 272, 43, 'Agatha Christie');

-- Inserting books for Dan Brown
INSERT INTO Books(BookName, BookPrice, BookRating, BookPages, AuthorID, AuthorName) 
VALUES ('The Da Vinci Code', 16.99, 8, 454, 44, 'Dan Brown'),
       ('Angels & Demons', 15.99, 8, 620, 44, 'Dan Brown');

-- Inserting books for Stephen King
INSERT INTO Books(BookName, BookPrice, BookRating, BookPages, AuthorID, AuthorName) 
VALUES ('The Shining', 14.99, 9, 464, 45, 'Stephen King'),
       ('It', 19.99, 9, 1138, 45, 'Stephen King');


-- Inserting more books for J.K. Rowling
INSERT INTO Books(BookName, BookPrice, BookRating, BookPages, AuthorID, AuthorName) 
VALUES ('Harry Potter and the Goblet of Fire', 26.99, 9, 734, 37, 'J.K. Rowling'),
       ('Harry Potter and the Order of the Phoenix', 27.99, 8, 870, 37, 'J.K. Rowling'),
       ('Harry Potter and the Half-Blood Prince', 29.99, 10, 652, 37, 'J.K. Rowling'),
       ('Harry Potter and the Deathly Hallows', 32.99, 10, 759, 37, 'J.K. Rowling');

-- Inserting more books for Fyodor Dostoevsky
INSERT INTO Books(BookName, BookPrice, BookRating, BookPages, AuthorID, AuthorName) 
VALUES ('The Idiot', 21.99, 7, 656, 38, 'Fyodor Dostoevsky'),
       ('Demons', 22.99, 8, 768, 38, 'Fyodor Dostoevsky'),
       ('The Gambler', 18.99, 6, 272, 38, 'Fyodor Dostoevsky');

-- Inserting more books for Leo Tolstoy
INSERT INTO Books(BookName, BookPrice, BookRating, BookPages, AuthorID, AuthorName) 
VALUES ('Resurrection', 19.99, 7, 512, 39, 'Leo Tolstoy'),
       ('The Death of Ivan Ilyich', 14.99, 9, 176, 39, 'Leo Tolstoy'),
       ('The Kreutzer Sonata', 16.99, 8, 192, 39, 'Leo Tolstoy');

-- Inserting more books for Jane Austen
INSERT INTO Books(BookName, BookPrice, BookRating, BookPages, AuthorID, AuthorName) 
VALUES ('Emma', 17.99, 8, 512, 40, 'Jane Austen'),
       ('Mansfield Park', 18.99, 7, 576, 40, 'Jane Austen'),
       ('Northanger Abbey', 16.99, 6, 320, 40, 'Jane Austen');

-- Inserting more books for George Orwell
INSERT INTO Books(BookName, BookPrice, BookRating, BookPages, AuthorID, AuthorName) 
VALUES ('Burmese Days', 15.99, 7, 320, 41, 'George Orwell'),
       ('Keep the Aspidistra Flying', 14.99, 6, 320, 41, 'George Orwell'),
       ('Coming Up for Air', 13.99, 8, 272, 41, 'George Orwell');

-- Inserting more books for Harper Lee
INSERT INTO Books(BookName, BookPrice, BookRating, BookPages, AuthorID, AuthorName) 
VALUES ('Go Set a Watchman', 16.99, 7, 288, 42, 'Harper Lee');

-- Inserting more books for J.R.R. Tolkien
INSERT INTO Books(BookName, BookPrice, BookRating, BookPages, AuthorID, AuthorName) 
VALUES ('The Silmarillion', 20.99, 8, 384, 43, 'J.R.R. Tolkien'),
       ('The Children of Húrin', 18.99, 9, 320, 43, 'J.R.R. Tolkien');

-- Inserting more books for Agatha Christie
INSERT INTO Books(BookName, BookPrice, BookRating, BookPages, AuthorID, AuthorName) 
VALUES ('The Murder of Roger Ackroyd', 14.99, 8, 288, 44, 'Agatha Christie'),
       ('The ABC Murders', 13.99, 7, 256, 44, 'Agatha Christie');

-- Inserting more books for Dan Brown
INSERT INTO Books(BookName, BookPrice, BookRating, BookPages, AuthorID, AuthorName) 
VALUES ('The Lost Symbol', 17.99, 7, 528, 45, 'Dan Brown'),
       ('Inferno', 19.99, 8, 480, 45, 'Dan Brown');

-- Inserting more books for Stephen King
INSERT INTO Books(BookName, BookPrice, BookRating, BookPages, AuthorID, AuthorName) 
VALUES ('Pet Sematary', 14.99, 8, 480, 46, 'Stephen King'),
       ('Misery', 15.99, 9, 368, 46, 'Stephen King');
