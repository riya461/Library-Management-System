<<<<<<< HEAD
const getReader = 'SELECT * FROM members';
// const searchReader = 'SELECT * FROM members where member_id = $1'
const addReader = 'INSERT INTO members(name,email,address,phone_number,password) values($1 , $2 , $3 , $4,$5)';
// const deleteReader = 'DELETE from members where member_id = $1 ';

module.exports = {
    getReader,
    // searchReader,
    addReader,    
    // deleteReader
=======
//name to be changed depending on feild
const getReader = 'SELECT * FROM members where name like $1%';
const addReader = 'INSERT INTO members values($1 , $2 , $3 , $4 , $5, $6)';
const deleteReader = 'DELETE from members where readerid = $1 ';

module.exports = {
    getReader,
    addReader,    
    deleteReader
>>>>>>> f0afcbe66a7ca2790ea2e180490f0153a3649ef9
};