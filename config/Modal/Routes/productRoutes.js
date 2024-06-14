import express from 'express'
import { isAdmin, requireSignIn } from './middleware/authMiddleware.js'
import { brainTreePaymentController, braintreeTokenController, createProductController, deleteProductController, getProductController, getSingleProductController, productCategoryController, productCountController, productFiltersController, productListController, productPhotoController, realtedProduct, searchController, updateProductController } from '../controller/productController.js'
import formidable from 'express-formidable'
const router = express.Router()

//routes
router.post('/create-product', requireSignIn, isAdmin, formidable(), createProductController)

//update product
router.put('/update-product/:pid', requireSignIn, isAdmin, formidable(), updateProductController)

//get product 
router.get('/get-product', getProductController)

//single product
router.get('/get-product/:slug', getSingleProductController)

//get photo
router.get('/product-photo/:pid', productPhotoController)

//delete product
router.delete('/product-delete/:pid', deleteProductController)

//filter product
router.post('/product-filters', productFiltersController)

//product count
router.get('/product-count', productCountController)

//product per page
router.get('/product-list/:page', productListController)

//search product
router.get('/search/:keyword', searchController)

//similar product
router.get('/related-product/:pid/:cid', realtedProduct)

//cat wise product
router.get('/product-category/:slug', productCategoryController)

//paymet route
router.get('/braintree/token', braintreeTokenController)

//payments
router.post('/braintree/payment', requireSignIn, brainTreePaymentController)
export default router