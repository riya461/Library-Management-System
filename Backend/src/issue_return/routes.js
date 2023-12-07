const { Router } = require('express');  
const router = Router();
const controller = require('./controller');

router.get('/validateId', controller.validateId);
router.get('/getData', controller.getData);
router.post('/issue', controller.issue);
router.delete('/returnBook', controller.returnBook);



module.exports = router;    