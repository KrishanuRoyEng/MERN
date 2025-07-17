const router= require('express').Router();
const productController = require('../controllers/products.controller');

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', productController.createProducts);
router.put('/:id', productController.updateProducts);
router.delete('/:id', productController.deleteProducts);

module.exports = router;