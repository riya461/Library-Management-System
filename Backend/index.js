const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')

//middleware
app.use(cors())
app.use(express.json())

//ROUTES//

// create a book
app.post('/books', async (req, res) => {
  try {
    const { id, title, author, available, borrowed } = req.body
    const newBook = await pool.query(
      "", 
      // here inser book query 
      [title, author, genre, pages]
    )

    res.json(newBook.rows[0])
  } catch (err) {
    console.error(err.message)
  }
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000')
})