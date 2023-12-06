//name to be changed depending on feild
const totalBooks = 'SELECT SUM(total) as TOTALBOOKS FROM book';
const totalAuthors = 'SELECT count(*) FROM authors'; //group by author_name';
const totalReaders = 'SELECT count(*) as TOTALREADERS FROM members';
const availableCount  = 'SELECT SUM(available) as available from book';
// const borrowedCount = 'SELECT SUM(borrowed) as borrowed from book';

module.exports = {
    totalBooks,
    totalAuthors,
    totalReaders,
    availableCount,
    // borrowedCount    
};