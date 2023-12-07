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
    const val1 = req.body;
    
    const book_id = val1["book_id"];
    const copy = val1["copy"];
    console.log(val1)
    console.log(book_id," ",copy)
    pool.query(queries.addCopies, [book_id,copy], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows[0]);
    });
};

const addBooks = async (req, res) => {
    const val1 = req.body;
    
    const title = val1["title"];
    const author = val1["author"];
    const total = val1["total"];
    pool.query(queries.addAuthors, [author] ,(error, results) => {

        if (error) {
            
            // ignore error
            
            console.log(error);
        }
       
        pool.query(queries.addBooks, [title,author,total], (errors, results) => {
            if (errors) {
                throw errors;
            }
        res.status(200).json(results.rows[0]);

        });
    });
};
const deleteCopies = async (req, res) => {
    const val1 = req.body;
    
    const book_id = val1["book_id"];
    const dele = val1["Delete"];
    const type = val1["type"];
    console.log("A copy",val1)
    console.log(book_id," ",dele)
    if(type=="available"){
    pool.query(queries.deleteCopies_avail, [book_id,dele], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
    }
    else{
        pool.query(queries.deleteCopies_borrow, [book_id,dele], (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).json(results.rows);
        });
    }


};
const deleteBook = async (req, res) => {
    const val = req.body;
    console.log("Bosy",val);
    
    const book_id = val["book_id"];
    pool.query(queries.deleteBook,[book_id], (error, results) => {
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
};