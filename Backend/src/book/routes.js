const { Router } = require('express');  
const router = Router();
const controller = require('./controller');

router.get('/get', controller.getBooks);
router.put('/addc', controller.addCopies);
router.post('/add', controller.addBooks);
router.delete('/del', controller.deleteBook);
router.put('/delc', controller.deleteCopies);
router.put('/bor', controller.borrowBooks);
router.put('/ret', controller.returnBooks);


module.exports = router;    