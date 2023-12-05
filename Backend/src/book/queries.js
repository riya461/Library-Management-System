//$1 is to be updated with each value in search bar
const getBooks = "SELECT b.isbn,b.title,a.author_name AS author,b.available as available,b.total - b.available AS borrowed,CASE WHEN ( b.available) > 0 THEN 'Yes' ELSE 'No' END AS availability FROM book b JOIN authors a ON b.author_id = a.author_id GROUP BY b.isbn, b.title, a.author_name, b.total";
//either nested loop for each copy or upadte query to available + $2
const addCopies = 'UPDATE book set available=available+1 where isbn =$1';
const addBooks = 'INSERT INTO book(isbn,title,author_id,available,total) values($1 , $2 , (SELECT author_id from authors where author_name = $3) , $4 , $5)';
//pass each value from loop
const deleteBook = 'DELETE from book where isbn = $1 ';
const deleteCopies = 'UPDATE book set available=available-1 where isbn=$1';
const borrowBooks = 'UPDATE book set borrowed=borrowed+1 where isbn=$1';
const returnBooks='UPDATE book set borrowed=borrowed-1 where isbn=$1';

module.exports = {
    getBooks,
    addCopies,
    addBooks,
    deleteBook,
    deleteCopies,
    borrowBooks,
    returnBooks
};