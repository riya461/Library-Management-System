const { Router } = require('express');  
const router = Router();
const controller = require('./controller');

router.get('/getStaff', controller.getStaff);
router.post('/addStaff', controller.addStaff);
router.delete('/deleteStaff', controller.deleteStaff);


module.exports = router;    