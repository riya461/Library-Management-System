const { Router } = require('express');  
const router = Router();
const controller = require('./controller');

router.get('/totalAuthors', controller.totalAuthors);
router.get('/totalBooks', controller.totalBooks);
router.get('/totalReaders', controller.totalReaders);
router.get('/availableCount', controller.availableCount);
// router.get('/borrowedCount', controller.borrowedCount);



module.exports = router;    