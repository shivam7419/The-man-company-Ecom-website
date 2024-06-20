import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import AdminMenu from '../components/Layout/AdminMenu'
import toast from 'react-hot-toast'
import axios from 'axios'
import { Select } from 'antd'
import { useNavigate } from 'react-router-dom'
const { Option } = Select
const CreateProducts = () => {
    const navigate = useNavigate()
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState([])
    const [photo, SetPhoto] = useState('')
    const [name, SetName] = useState('')
    const [description, SetDescription] = useState('')
    const [price, SetPrice] = useState('')
    const [quantity, SetQuantity] = useState('')
    const [shipping, SetShipping] = useState('')

    //get cat
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

    //create product
    const handelCreate = async (e) => {
        e.preventDefault()
        try {
            const productdata = new FormData()
            productdata.append("name", name)
            productdata.append("description", description)
            productdata.append("price", price)
            productdata.append("quantity", quantity)
            productdata.append("photo", photo)
            productdata.append("shipping", shipping)
            productdata.append("category", category)
            const { data } = axios.post('http://localhost:8080/api/v1/product/create-product', productdata)
            if (data?.success) {
                toast.error(data?.message)
            }
            else {
                toast.success("Product Created SucessFully")
                navigate('/dashboard/admin/products')
            }
        }
        catch (error) {
            console.log(error)
            toast.error("Somthing Wrong")
        }
    }
    return (
        <Layout>
            <div className='container-fluid m-3 p-3'>
                <div className='row'>
                    <div className='col-md-3'>
                        <AdminMenu />
                    </div>
                    <div className='col-md-9'>
                        <h1>Create Product </h1>
                        <div className='m-1'>
                            <Select bordered={false} placeholder="Selete a category" size='large' showSearch className='form-select mb-3' onChange={(value) => { setCategory(value) }} >
                                {categories?.map(c => (
                                    <Option key={c._id} value={c._id}>{c.name}</Option>
                                ))}
                            </Select>
                            <div className='mb-3'>
                                <label className='btn btn-outline-secondary col-md-12'>
                                    {photo ? photo.name : "Upload Photo"}
                                    <input type='file' name='Photo' accept='image/*' onChange={(e) => SetPhoto(e.target.files[0])} hidden />
                                </label>
                            </div>
                            <div className='mb-3'>
                                {photo && (
                                    <div className='text-center'>
                                        <img src={URL.createObjectURL(photo)} height={"200px"} alt='product_photo' className='img img-responsive' />
                                    </div>
                                )}
                            </div>
                            <div className='mb-3'>
                                <input type='text' value={name} placeholder='Write a name' className='form-control' onChange={(e) => SetName(e.target.value)} /></div>
                            <div className='mb-3'>
                                <textarea type='text' value={description} placeholder='Write a description' className='form-control' onChange={(e) => SetDescription(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <input type='number' value={price} placeholder='Write a Price' className='form-control' onChange={(e) => SetPrice(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <input type='number' value={quantity} placeholder='Write a quantity' className='form-control' onChange={(e) => SetQuantity(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <Select bordered={false} value={shipping} placeholder='Select Shipping' size='large' showSearch className='form-control mb-3' onChange={(value) => SetShipping(value)}>
                                    <Option value="0">No</Option>
                                    <Option value="1">Yes</Option>
                                </Select>
                            </div>
                            <div className='mb-3'>
                                <button className='btn btn-primary' onClick={handelCreate}>Create Product</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default CreateProducts
