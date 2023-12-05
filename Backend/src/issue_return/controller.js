const pool = require('../../db');
const queries = require('./queries');
const validateId= async (req, res) => {
    pool.query(queries.validateId, (error, results) => {
        if (error) {
            throw error;
        }
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
const issueBook = async (req, res) => {
    pool.query(queries.issueBook, (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};
const issue = async (req, res) => {
    pool.query(queries.issue, (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};
const returnBook = async (req, res) => {
    pool.query(queries.returnBook, (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};
const updateReturn = async (req, res) => {
    pool.query(queries.updateReturn, (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};



module.exports = {
    validateId,
    getData,
    issueBook,
    issue,
    returnBook,
    updateReturn
};