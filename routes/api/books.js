const router = require("express").Router();
const booksController = require("../../controllers/booksController");
// watch dog & sniff & wireshark 
// Matches with "/api/books"
router.route("/")
    .get(booksController.getBooks)
    .post(booksController.saveBook);

// Matches with "/api/books/:id"
router
    .route("/:id")
    .delete(booksController.deleteBook);

module.exports = router;
