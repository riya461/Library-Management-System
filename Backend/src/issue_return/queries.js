const validateId='SELECT i.member_id from members m,issue_return i where i.member_id=m.member_id'
const getData = 'SELECT * FROM issue_return';
<<<<<<< HEAD
const issueBook = 'UPDATE book set available=available-1 and borrowed = borrowed+1 where book_id=(SELECT book_id from issue_return where book_id=$1) ';
const issue ='INSERT into issue_return values( $1, $2, $3, $4, $5, $6)';
const returnBook='DELETE from issue_return where issue_return_id=$1';
const updateReturn='UPDATE book set available=available+1 and borrowed=borrowed-1 where book_id=(SELECT book_id from issue_return where book_id=$1) ';
=======
const issueBook = 'UPDATE book set available=available-1 and borrowed = borrowed+1 where isbn=(SELECT isbn from issue_return where isbn=$1) ';
const issue ='INSERT into issue_return values( $1, $2, $3, $4, $5, $6)';
const returnBook='DELETE from issue_return where issue_return_id=$1';
const updateReturn='UPDATE book set available=available+1 and borrowed=borrowed-1 where isbn=(SELECT isbn from issue_return where isbn=$1) ';
>>>>>>> f0afcbe66a7ca2790ea2e180490f0153a3649ef9

module.exports = {
    validateId,
    getData,
    issueBook,
    issue,
    returnBook,
    updateReturn
};