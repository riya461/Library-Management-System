//name to be changed depending on feild
const getAuth = 'SELECT * FROM authentication_system where loginid = $1';
const verifyAuth = 'SELECT loginid from authentication_system a,staff s where s.staff_id=a.staff_id';
//add pwd requirements if needed
const addAuth = 'INSERT into authentication_system values($1 ,$2 ,$3 ) ';
//to change pwd
const updateAuth='UPDATE authentication_system set pwd=$1 where pwd like $1%';
//delete based on staff_id
const deleteAuth= 'DELETE from authentication_system where staff_id =$1';

module.exports = {
    getAuth,
    addAuth,    
    deleteAuth,
    verifyAuth,
    updateAuth
};