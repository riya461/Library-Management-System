const express = require('express');
const app = express();
app.use(express.json());
<<<<<<< HEAD

const bookRouter = require('./src/book/routes');
const dashRouter = require('./src/dash/routes');
const membersRouter = require('./src/members/routes');

const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use("/api/books", bookRouter);
app.use("/api/dash", dashRouter);
app.use("/api/members", membersRouter);
=======
const bookRouter = require('./src/book/routes');
const cors = require('cors');
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use("/api/books", bookRouter);
>>>>>>> f0afcbe66a7ca2790ea2e180490f0153a3649ef9

app.listen(5000, () => {
    console.log('server started');
});