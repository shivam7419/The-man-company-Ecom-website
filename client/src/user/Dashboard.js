import React from 'react'
import Layout from '../components/Layout/Layout'
import Usermenu from '../components/Layout/Usermenu'
import { useAuth } from '../auth'

const Dashboard = () => {
    const [auth] = useAuth()
    return (
        <Layout title={"Dashboard- The Man Company"}>
            <div className='container-fluid p-3 m-3'>
                <div className='row'>
                    <div className='col-md-3'>
                        <Usermenu />
                    </div>
                    <div className='col-md-9'>
                        <div className='card w-75 p-3'>
                            <h3>Name: {auth?.user?.name}</h3>
                            <h3>Email: {auth?.user?.email}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard
