const { Router } = require('express');  
const router = Router();
const controller = require('./controller');

router.get('/get', controller.getBooks);
<<<<<<< HEAD
router.post('/addc', controller.addCopies);
router.post('/add', controller.addBooks);
router.delete('/del', controller.deleteBook);
router.post('/delc', controller.deleteCopies);

=======
router.put('/addc', controller.addCopies);
router.post('/add', controller.addBooks);
router.delete('/del', controller.deleteBook);
router.put('/delc', controller.deleteCopies);
router.put('/bor', controller.borrowBooks);
router.put('/ret', controller.returnBooks);
>>>>>>> f0afcbe66a7ca2790ea2e180490f0153a3649ef9


module.exports = router;    