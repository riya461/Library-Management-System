const express = require('express');
const app = express();
app.use(express.json());
const bookRouter = require('./src/book/routes');
const cors = require('cors');
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use("/api/books", bookRouter);

app.listen(5000, () => {
    console.log('server started');
});