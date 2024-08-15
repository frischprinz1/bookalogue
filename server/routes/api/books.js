const express = require('express');
const path = require('path');
const router = express.Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

router.get('/', (req, res, next) => {
  fs.readFile(path.resolve(__dirname, '../../data.json'), (err, data) => {
    if (err) return next(err);

    let books = JSON.parse(data);

    return res.status(200).json(books);
  });
});

router.get('/:id', (req, res, next) => {
  fs.readFile(path.resolve(__dirname, '../../data.json'), (err, data) => {
    if (err) return next(err);

    let books = JSON.parse(data);
    const book = books.filter((book) => book.id == req.params.id);

    return res.status(200).json(book);
  });
});

router.post('/create', (req, res, next) => {
  fs.readFile(path.resolve(__dirname, '../../data.json'), (err, data) => {
    if (err) return next(err);

    let updatedBookList;
    let existingBooks = JSON.parse(data);
    
    let bookData = {
      ...req.body,
      ...{ id: uuidv4(), createdAt: Date.now(), cover: 'https://images-us.bookshop.org/ingram/9781538724736.jpg?height=1200&v=v2-d5582503aa43f350b03c8d978f17d659' },
    };

    updatedBookList = [...existingBooks, bookData];

    fs.writeFile(
      path.resolve(__dirname, '../../data.json'),
      JSON.stringify(updatedBookList),
      (err) => next(err)
    );

    return res.status(200).json(updatedBookList);
  });
});

router.delete('/remove/:id', (req, res, next) => {
  fs.readFile(path.resolve(__dirname, '../../data.json'), (err, data) => {
    if (err) return next(err);

    let books = JSON.parse(data);
    let updatedBookList = books.filter((book) => book.id != `${req.params.id}`);

    fs.writeFile(
      path.resolve(__dirname, '../../data.json'),
      JSON.stringify(updatedBookList),
      (err) => next(err)
    );

    return res.status(200).json(updatedBookList);
  });
});

router.put('/update/:id', (req, res, next) => {
  fs.readFile(path.resolve(__dirname, '../../data.json'), (err, data) => {
    if (err) return next(err);

    let existingBooks = JSON.parse(data);
    let bookToUpdateData = req.body;

    let updatedBookList = existingBooks.map((book) => {
      if (book.id === `${req.params.id}`) {
        return {
          ...book,
          ...bookToUpdateData,
          id: book.id,
        };
      }

      return book;
    });

    fs.writeFile(
      path.resolve(__dirname, '../../data.json'),
      JSON.stringify(updatedBookList),
      (err) => next(err)
    );

    return res.status(200).json(updatedBookList);
  });
});

module.exports = router;
