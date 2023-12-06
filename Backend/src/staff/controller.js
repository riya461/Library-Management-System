const pool = require('../../db');
const queries = require('./queries');
const getStaff= async (req, res) => {
    pool.query(queries.getStaff, (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};
const addStaff = async (req, res) => {
    pool.query(queries.addStaff, (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};
const deleteStaff = async (req, res) => {
    pool.query(queries.deleteStaff, (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};



module.exports = {
    getStaff,
    addStaff,    
    deleteStaff
};