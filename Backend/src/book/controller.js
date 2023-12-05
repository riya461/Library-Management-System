const pool = require('../../db');
const queries = require('./queries');
const getBooks = async (req, res) => {
    pool.query(queries.getBooks, (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};
const addCopies = async (req, res) => {
    pool.query(queries.addCopies, (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

const addBooks = async (req, res) => {
    const val = req.body;
    val1=val["newBook"];
    console.log(val1);
    const isbn = val1["isbn"];
    const title = val1["title"];
    const author = val1["author"];
    const available = val1["available"];
    const total = val1["total"];
    pool.query(queries.addBooks, [isbn,title,author,available,total] ,(error, results) => {

        if (error) {
            console.log(error);
        }
        else{
            const {newBook} = req.body;
            console.log(newBook);
            

        }
        res.status(200).json(results.rows);
    });
};
const deleteBook = async (req, res) => {
    pool.query(queries.deleteBook, (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};
const deleteCopies = async (req, res) => {
    pool.query(queries.deleteCopies, (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};
const borrowBooks = async (req, res) => {
    pool.query(queries.borrowBooks, (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};
const returnBooks = async (req, res) => {
    pool.query(queries.returnBooks, (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};



module.exports = {
    getBooks,
    addCopies,
    addBooks,
    deleteBook,
    deleteCopies,
    borrowBooks,
    returnBooks
};