const { Router } = require('express');  
const router = Router();
const controller = require('./controller');

router.get('/validateId', controller.validateId);
router.get('/getData', controller.getData);
router.post('/issue', controller.issue);
router.delete('/returnBook', controller.returnBook);
router.put('/issueBook',controller.issueBook);
router.put('/updateReturn',controller.updateReturn);



module.exports = router;    