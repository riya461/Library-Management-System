const pool = require('../../db');
const queries = require('./queries');
const getReader= async (req, res) => {
<<<<<<< HEAD
    pool.query(queries.getReader, (error, results) => {
=======
    pool.query(queries.get, (error, results) => {
>>>>>>> f0afcbe66a7ca2790ea2e180490f0153a3649ef9
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};
<<<<<<< HEAD
// const searchReader = async (req, res) => {
//     pool.query(queries.searchReader, (error, results) => {
//         if (error) {
//             throw error;
//         }
//         res.status(200).json(results.rows);
//     });
// }
const addReader = async (req, res) => {
    const val = req.body;
    const name = val["name"];
    const email = val["email"];
    const phone = val["phoneNumber"];
    const address = val["address"];
    const password = "1234"
    console.log(val1)
    pool.query(queries.addReader,[name,email,address, phone],password, (error, results) => {
=======
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
>>>>>>> f0afcbe66a7ca2790ea2e180490f0153a3649ef9
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};
<<<<<<< HEAD
// const deleteReader = async (req, res) => {
//     pool.query(queries.deleteReader, (error, results) => {
//         if (error) {
//             throw error;
//         }
//         res.status(200).json(results.rows);
//     });
// };
=======
>>>>>>> f0afcbe66a7ca2790ea2e180490f0153a3649ef9



module.exports = {
    getReader,
<<<<<<< HEAD
    // searchReader,
    addReader,
    // deleteReader
=======
    addReader,
    deleteReader
>>>>>>> f0afcbe66a7ca2790ea2e180490f0153a3649ef9
};