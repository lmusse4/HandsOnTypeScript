"use strict";
const books = [
    {
        id: 1,
        title: "The Cat in the Hat",
        author: "Dr. Seuss",
        published: new Date("02-12-1957"),
        available: true,
    },
    {
        id: 2,
        title: "Atomic Habits",
        author: "James Clear",
        published: new Date("09-16-2018"),
        available: true,
    },
];
function addBook(book) {
    books.push(book);
}
function findBookById(id) {
    return books.find((book) => book.id === id);
}
function updateBook(book) {
    const index = books.findIndex((b) => b.id === book.id);
    if (index !== -1) {
        books[index] = book;
        return true;
    }
    return false;
}
function removeBook(id) {
    const index = books.findIndex(book => book.id === id);
    if (index === -1) {
        return false;
    }
    books.splice(index, 1);
    return true;
}
//testing
//finding book by id
const book2 = findBookById(2);
console.log(book2);
// Update a book
const updatedBook = {
    id: 2,
    title: "Atomic Habits (Updated)",
    author: "James Clear",
    published: new Date("04-27-2023"),
    available: true,
};
const isUpdated = updateBook(updatedBook);
console.log(isUpdated);
// Find the updated book by id
const foundUpdatedBook = findBookById(2);
console.log(foundUpdatedBook);
// Remove a book
const isRemoved = removeBook(1);
console.log(isRemoved);
// Find the removed book by id
const foundRemovedBook = findBookById(1);
console.log(foundRemovedBook);
//Add a Book
addBook({
    id: 3,
    title: "No, David",
    author: "David Shannon",
    published: new Date("08-08-1998"),
    available: false,
});
//Check if book added
console.log(books);
//   Requirements:
// Define an interface Book with the following properties:
// id (number)
// title (string)
// author (string)
// published (Date)
// available (boolean)
// Create an array books with the type Book[] and add a few sample books to the array.
// Define a function addBook(book: Book): void that takes a Book object as a parameter and adds it to the books array.
// Define a function findBookById(id: number): Book | undefined that takes a book id as a parameter and returns the book with the given id or undefined if the book is not found.
// Define a function updateBook(book: Book): boolean that takes a Book object as a parameter, finds the book with the same id in the books array, and updates its properties. The function should return true if the book was updated successfully or false if the book was not found.
// Define a function removeBook(id: number): boolean that takes a book id as a parameter and removes the book with the given id from the books array. The function should return true if the book was removed successfully or false if the book was not found.
// Test your functions by adding, updating, and removing books, and finding books by their id.
