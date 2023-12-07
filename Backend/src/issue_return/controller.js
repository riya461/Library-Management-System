const pool = require('../../db');
const queries = require('./queries');
const validateId= async (req, res) => {
    const val = req.body;
    console.log(val);
    const valid = val["id"];
    console.log(valid);
    pool.query(queries.validateId,[valid], (error, results) => {
        if (error) {
            throw error;
        }
        console.log(results.rows);
        res.status(200).json(results.rows);
    });
};
const getData = async (req, res) => {
    pool.query(queries.getData, (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

const issue = async (req, res) => {
    const val = req.body;
    console.log(val);
    const book_id = val["book_id"];
    const memberid = val["member_id"];
    console.log(book_id);
    console.log(memberid);
    pool.query(queries.issueBook, [book_id],(error, results) => {
        if (error) {
            throw error;
        }
    });
    pool.query(queries.issue, [book_id,memberid],(error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

const returnBook = async (req, res) => {
    const val = req.body;
    console.log(val);
    const book_id = val["book_id"];
    const memberid = val["member_id"];
    console.log(book_id);
    console.log(memberid);
    pool.query(queries.updateReturn, [book_id],(error, results) => {
        if (error) {
            throw error;
        }
    });
    pool.query(queries.returnBook, [book_id,memberid],(error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};




module.exports = {
    validateId,
    getData,
    issue,
    returnBook,
};