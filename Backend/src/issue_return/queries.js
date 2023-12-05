const validateId='SELECT i.member_id from members m,issue_return i where i.member_id=m.member_id'
const getData = 'SELECT * FROM issue_return';
const issueBook = 'UPDATE book set available=available-1 and borrowed = borrowed+1 where isbn=(SELECT isbn from issue_return where isbn=$1) ';
const issue ='INSERT into issue_return values( $1, $2, $3, $4, $5, $6)';
const returnBook='DELETE from issue_return where issue_return_id=$1';
const updateReturn='UPDATE book set available=available+1 and borrowed=borrowed-1 where isbn=(SELECT isbn from issue_return where isbn=$1) ';

module.exports = {
    validateId,
    getData,
    issueBook,
    issue,
    returnBook,
    updateReturn
};