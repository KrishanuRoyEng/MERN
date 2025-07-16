const router= require('express').Router();
const userController = require('../controllers/user.controller');

router.get('/:id',userController.getUserById);
router.post('/',userController.createUsers);

module.exports = router;