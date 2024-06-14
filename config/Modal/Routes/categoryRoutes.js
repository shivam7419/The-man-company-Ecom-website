import exxpress from 'express'
import { isAdmin, requireSignIn } from './middleware/authMiddleware.js'
import { categoryController, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from '../controller/categoryController.js'

const router = exxpress.Router()
//routes
router.post('/create-category', requireSignIn, isAdmin, createCategoryController)
//update Category
router.put('/update-category/:id', requireSignIn, isAdmin, updateCategoryController)
//get all category
router.get('/get-category', categoryController)
//single category
router.get('/single-category/:slug', singleCategoryController)
//delete Category
router.delete('/delete-category/:id', requireSignIn, isAdmin, deleteCategoryController)
export default router