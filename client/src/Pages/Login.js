import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import '../styles/AuthStyle.css'
import { useAuth } from '../auth'
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [auth, setAuth] = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:8080/api/v1/auth/login", {
                email,
                password,
            });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token
                })
                localStorage.setItem("auth", JSON.stringify(res.data));
                navigate(location.state || "/");
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
        <>
            <Layout title="Register - The Man Company">
                <div className='form-container'>
                    <h1>Login Form</h1>
                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">

                            <input type="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail2" placeholder='Enter Your Email' required />

                        </div>
                        <div className="mb-3">

                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword3" placeholder='Enter Your Password' required />
                        </div>

                        <div className='mb-3'>
                            <button type="button" className="btn btn-primary" onClick={() => { navigate('/forgotpassword') }}>Forgot Password</button>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

                </div>
            </Layout>
        </>
    )
}

export default Login
