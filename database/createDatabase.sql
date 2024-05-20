use [MPP-Library];


CREATE TABLE Users (
    UserID INT IDENTITY(1,1) PRIMARY KEY,
    Username VARCHAR(50) NOT NULL UNIQUE,
    HashedPassword VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL UNIQUE,
)

CREATE  TABLE Authors(
    AuthorID int IDENTITY(1,1) PRIMARY KEY,
    AuthorName varchar(50) UNIQUE,
	Username VARCHAR(50) FOREIGN KEY REFERENCES Users(Username)
 )

CREATE TABLE Books(
    BookID int IDENTITY(1,1) PRIMARY KEY,
    BookName varchar(50) NOT NULL,
    BookPrice decimal(10,2),
    BookRating int CHECK(BookRating >= 1 AND BookRating <= 10),
    BookPages int,
    AuthorID int FOREIGN KEY REFERENCES Authors(AuthorID),
    AuthorName varchar(50) FOREIGN Key REFERENCES Authors(AuthorName) not NULL,
	Username VARCHAR(50) FOREIGN KEY REFERENCES Users(Username)
)


ALTER TABLE Books
ADD CONSTRAINT UC_Book_Author UNIQUE (BookName, AuthorName);


GO
CREATE VIEW AuthorView AS
SELECT 
    Authors.AuthorID,
    Authors.AuthorName,
    COALESCE(AVG(Books.BookRating),0)as AuthorRating,
    COUNT(Books.BookID) as AuthorBooks
FROM 
    Authors
LEFT JOIN 
    Books ON Authors.AuthorID = Books.AuthorID
GROUP BY 
    Authors.AuthorID, Authors.AuthorName
GO


