import slugify from "slugify"
import categoryModal from "../categoryModal.js"
import UserModal from "../UserModal.js"

export const createCategoryController = async (req, res) => {
    try {
        const { name } = req.body
        if (!name) {
            return res.status(401).send({ message: "Name is Required" })
        }
        const existingCategory = await categoryModal.findOne({ name })
        if (existingCategory) {
            return res.status(200).send({
                success: true,
                message: "Category Already Exisits"
            })
        }
        const category = await new categoryModal({ name, slug: slugify(name) }).save()
        res.status(201).send({
            success: true,
            message: "New category Created",
            category,
        })
    }
    catch (error) {
        console.log(error)
        res.send(500).send({
            success: false,
            error,
            message: "Error In Category"
        })
    }
}

//update category
export const updateCategoryController = async (req, res) => {
    try {
        const { name } = req.body
        const { id } = req.params
        const category = await categoryModal.findByIdAndUpdate(id, { name, slug: slugify(name) }, { new: true })
        res.status(201).send({
            success: true,
            message: "Category Update Successfully",
            category,
        })
    }
    catch (error) {
        console.log(error)
        res.send(500).send({
            success: false,
            error,
            message: "Error In upadting category"
        })
    }
}

//get category
export const categoryController = async (req, res) => {
    try {
        const category = await categoryModal.find({})
        res.status(201).send({
            success: true,
            message: "All Categories List",
            category,
        })
    }
    catch (error) {
        console.log(error)
        res.send(500).send({
            success: false,
            error,
            message: "Error to get all categories"
        })
    }
}

//single Category
export const singleCategoryController = async (req, res) => {
    try {
        const category = await categoryModal.findOne({ slug: req.params.slug })
        res.status(200).send({
            success: true,
            message: "Single Category",
            category,
        })
    }
    catch (error) {
        console.log(error)
        res.send(500).send({
            success: false,
            error,
            message: "Error to get Single categories"
        })
    }
}


//delete Category
export const deleteCategoryController = async (req, res) => {
    try {
        const { id } = req.params
        const category = await categoryModal.findByIdAndDelete(id)
        res.status(200).send({
            success: true,
            message: "Deleted SucessFully",
            category,
        })
    }
    catch (error) {
        console.log(error)
        res.send(500).send({
            success: false,
            error,
            message: "Error to Delete"
        })
    }
}


