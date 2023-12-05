const { Router } = require('express');  
const router = Router();
const controller = require('./controller');

router.get('/getReader', controller.getReader);
router.post('/addReader', controller.addReader);
router.delete('/deleteReader', controller.deleteReader);


module.exports = router;    