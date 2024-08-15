const express = require("express");
const bookRouter = require("./api/books");

const router = express.Router();

router.get("/", function(req, res) {
  res.status(200);
});

router.use("/books", bookRouter);

module.exports = router;
