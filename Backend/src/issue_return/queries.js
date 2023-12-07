const validateId='SELECT member_id FROM members WHERE EXISTS(SELECT member_id from members where member_id=$1)'
const getData = 'SELECT * FROM issues_returns';
const issueBook = 'UPDATE book set available=available-1  where book_id=$1 ';
const issue = ' INSERT INTO issues_returns (member_id, book_id) VALUES ($2, $1)';

const returnBook='DELETE from issues_returns where member_id=$2 and book_id=$1';
const updateReturn='UPDATE book set available=available+1  where book_id=$1 ';

module.exports = {
    validateId,
    getData,
    issueBook,
    issue,
    returnBook,
    updateReturn
};