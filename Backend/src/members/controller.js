const pool = require('../../db');
const queries = require('./queries');
const getReader= async (req, res) => {
    pool.query(queries.get, (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};
const addReader = async (req, res) => {
    pool.query(queries.addReader, (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};
const deleteReader = async (req, res) => {
    pool.query(queries.deleteReader, (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};



module.exports = {
    getReader,
    addReader,
    deleteReader
};