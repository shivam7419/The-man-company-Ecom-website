import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import AdminMenu from '../components/Layout/AdminMenu'
import toast from 'react-hot-toast'
import axios from 'axios'
import CategoryForm from '../components/form/CategoryForm'
import { Modal } from 'antd'

const CreateCategory = () => {
    const [categories, setCategories] = useState([])
    const [name, setName] = useState('')
    const [visible, setVisible] = useState()
    const [selected, setSelected] = useState(null)
    const [updatedName, setupdatedName] = useState()

    //handel form 
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post('http://localhost:8080/api/v1/category/create-category', {
                name
            })
            if (data.success) {
                toast.success(`${name} is Created`)
                getAllCategory()
            } else {
                toast.error(data.message)
            }
        }
        catch (error) {
            console.log(error)
            toast.error("Something Wrong")
        }
    }
    //get all cat
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get('http://localhost:8080/api/v1/category/get-category')
            if (data?.success) {
                setCategories(data?.category)
            }
        }
        catch (error) {
            console.log(error)
            toast.error("Somthing went wrong")

        }
    }
    useEffect(() => {
        getAllCategory()
    }, [])
    //update cat
    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.put(`http://localhost:8080/api/v1/category/update-category/${selected._id}`, { name: updatedName })
            if (data.success) {
                toast.success(`${updatedName} is Updated`)
                setSelected(null)
                setupdatedName('')
                setVisible(false)
                getAllCategory()
            }
            else {
                toast.error(data.message)
            }
        }
        catch (error) {
            toast.error("Somthing Went Wrong")
        }
    }
    //delete cat

    const handleDelete = async (pId) => {

        try {
            const { data } = await axios.delete(`http://localhost:8080/api/v1/category/delete-category/${pId}`)
            if (data.success) {
                toast.success(`Category is Deleted`)
                getAllCategory()
            }
            else {
                toast.error(data.message)
            }
        }
        catch (error) {
            toast.error("Somthing Went Wrong")
        }
    }

    return (
        <Layout title={"Dashboard Create Category"}>
            <div className='container-fluid m-3 p-3'>
                <div className='row'>
                    <div className='col-md-3'>
                        <AdminMenu />
                    </div>
                    <div className='col-md-9'>
                        <h1>Manage Category</h1>
                        <div className='p-3 w-50'>
                            <CategoryForm handleSubmit={handleSubmit} value={name} setValue={setName} />
                        </div>
                        <div className='w-75'>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categories?.map((c) => (
                                        <>
                                            <tr>
                                                <td key={c._id}>{c.name}</td>
                                                <td><button className='btn btn-primary ms-2' onClick={() => { setVisible(true); setupdatedName(c.name); setSelected(c) }}>Edit</button>
                                                    <button className='btn btn-danger ms-2' onClick={() => { handleDelete(c._id) }}>Delete</button></td>
                                            </tr>
                                        </>
                                    ))}
                                </tbody>
                            </table>

                        </div>
                        <Modal onCancel={() => setVisible(false)} footer={null} visible={visible}>
                            <CategoryForm value={updatedName} setValue={setupdatedName} handleSubmit={handleUpdate} />
                        </Modal>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CreateCategory
