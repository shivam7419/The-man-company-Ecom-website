import { useState, useEffect } from 'react'
import { useAuth } from '../auth'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import Spinner from '../components/Spinner'

export default function PrivateRoute() {
    const [ok, setOk] = useState(false)
    const [auth, setAuth] = useAuth()

    useEffect(() => {
        const authCheck = async () => {
            const res = await axios.get('http://localhost:8080/api/v1/auth/user-auth')
            if (res.data.ok) {
                setOk(true)
            }
            else {
                setOk(false)
            }
        }
        if (auth?.token) authCheck()
    }, [auth?.token])
    return ok ? <Outlet /> : <Spinner />
}