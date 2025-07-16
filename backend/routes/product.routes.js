const router= require('express').Router();
const productController = require('../controllers/products.controller');

router.get('/:id', productController.getProductById);
router.post('/', productController.createProducts);

module.exports = router;