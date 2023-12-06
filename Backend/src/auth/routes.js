const { Router } = require('express');  
const router = Router();
const controller = require('./controller');

router.get('/getAuth', controller.getAuth);
router.get('/verifyAuth', controller.verifyAuth);
router.post('/addAuth', controller.addAuth);
router.delete('/deleteAuth', controller.deleteAuth);
router.put('/updateAuth',controller.updateAuth)


module.exports = router;    