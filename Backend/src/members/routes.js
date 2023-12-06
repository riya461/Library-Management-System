const { Router } = require('express');  
const router = Router();
const controller = require('./controller');

router.get('/getReader', controller.getReader);
<<<<<<< HEAD
// router.get('/searchReader', controller.searchReader);
router.post('/addReader', controller.addReader);
// router.delete('/deleteReader', controller.deleteReader);
=======
router.post('/addReader', controller.addReader);
router.delete('/deleteReader', controller.deleteReader);
>>>>>>> f0afcbe66a7ca2790ea2e180490f0153a3649ef9


module.exports = router;    