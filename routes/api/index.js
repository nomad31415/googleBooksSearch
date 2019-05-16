const router = require('express').Router();
const bookRoutes = require('./books');

// Book routes   static?
router.use('/books', bookRoutes);

module.exports = router;
