import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../styles/AuthStyle.css'


const Forgotpassword = () => {
    const [email, setEmail] = useState('')
    const [newpassword, setNewpassword] = useState('')
    const [answer, setAnswer] = useState('')
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:8080/api/v1/auth/forgot-password", {
                email,
                newpassword,
                answer,
            });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);

                navigate("/login");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    }
    return (
        <Layout title="Register - The Man Company">
            <div className='form-container'>
                <h1>Reset Password</h1>
                <form onSubmit={handleSubmit}>

                    <div className="mb-3">

                        <input type="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail2" placeholder='Enter Your Email' required />

                    </div>
                    <div className="mb-3">

                        <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} className="form-control" id="exampleInputPassword3" placeholder='Enter Your Nick Name' required />
                    </div>
                    <div className="mb-3">

                        <input type="password" value={newpassword} onChange={(e) => setNewpassword(e.target.value)} className="form-control" id="exampleInputPassword4" placeholder='Enter Your New Password' required />
                    </div>
                    <button type="submit" className="btn btn-primary">Reset</button>
                </form>

            </div>
        </Layout>
    )
}

export default Forgotpassword
