import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../styles/AuthStyle.css'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setaddress] = useState('')
    const [answer, setAnswer] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:8080/api/v1/auth/register", {
                name,
                email,
                password,
                phone,
                address,
                answer,

            });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                navigate("/login");
            } else {
                toast.error(res.data.message);
            }
        }
        catch (error) {
            console.log(error)
            toast.error('Somthing Wrong')

        }
    }
    return (
        <Layout title="Register - The Man Company">
            <div className='form-container'>
                <h1>Register Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Enter Your Name' required />

                    </div>
                    <div className="mb-3">

                        <input type="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail2" placeholder='Enter Your Email' required />

                    </div>
                    <div className="mb-3">

                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword3" placeholder='Enter Your Password' required />
                    </div>
                    <div className="mb-3">

                        <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" id="exampleInputEmail4" placeholder='Enter your Phone No.' required />

                    </div>
                    <div className="mb-3">

                        <input type="text" value={address} onChange={(e) => setaddress(e.target.value)} className="form-control" id="exampleInputEmail5" placeholder='Enter Your Address' required />

                    </div>
                    <div className="mb-3">

                        <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} className="form-control" id="exampleInputEmail6" placeholder='What is Your Nick Name' required />

                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        </Layout>
    )
}

export default Register
