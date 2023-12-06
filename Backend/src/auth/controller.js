const pool = require('../../db');
const queries = require('./queries');
const getAuth= async (req, res) => {
    pool.query(queries.getAuth, (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};
const verifyAuth= async (req, res) => {
    pool.query(queries.verifyAuth, (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};
const addAuth = async (req, res) => {
    pool.query(queries.addAuth, (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};
const deleteAuth = async (req, res) => {
    pool.query(queries.deleteAuth, (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};
const updateAuth = async (req, res) => {
    pool.query(queries.updateAuth, (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};



module.exports = {
    getAuth,
    addAuth,    
    deleteAuth,
    verifyAuth,
    updateAuth
};