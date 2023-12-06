//name to be changed depending on feild
const getStaff = 'SELECT * FROM staff where staff_id = $1';
const addStaff = 'INSERT INTO staff values($1 , $2 )';
const deleteStaff= 'DELETE from staff where staff_id = $1 ';

module.exports = {
    getStaff,
    addStaff,    
    deleteStaff
};