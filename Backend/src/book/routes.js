const { Router } = require('express');  
const router = Router();
const controller = require('./controller');

router.get('/get', controller.getBooks);
router.post('/addc', controller.addCopies);
router.post('/add', controller.addBooks);
router.delete('/del', controller.deleteBook);
router.post('/delc', controller.deleteCopies);



module.exports = router;    