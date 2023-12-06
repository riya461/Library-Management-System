const express = require('express');
const app = express();
app.use(express.json());

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

app.listen(5000, () => {
    console.log('server started');
});