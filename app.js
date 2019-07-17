const express = require('express');
const mongoose = require('mongoose');
const app = express();
const db = mongoose.connect('mongodb://localhost/booksAPI');
const bookRouter = express.Router();
const port = process.env.port || 3000;

const Book = require('./models/booksModel');
bookRouter.route('/books')
.get((req,res) => {
  const { query } = req;
    Book.find( query, (err,books) => {
        if(err)
          return res.json(err);
        return res.json(books);
    });
});
app.use('/api', bookRouter);
app.get('/', (req, res) => {
  res.send('Welcome to Node Restful API');
});

app.listen(port, () => {
   console.log(`Running on port' ${port}`);
});
