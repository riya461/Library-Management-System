//name to be changed depending on feild
const getReader = 'SELECT * FROM members where name like $1%';
const addReader = 'INSERT INTO members values($1 , $2 , $3 , $4 , $5, $6)';
const deleteReader = 'DELETE from members where readerid = $1 ';

module.exports = {
    getReader,
    addReader,    
    deleteReader
};