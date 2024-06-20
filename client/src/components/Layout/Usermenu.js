import React from 'react'
import { NavLink } from 'react-router-dom'

const Usermenu = () => {
    return (
        <>
            <div className='text-center'>
                <div className="list-group">
                    <h3>User Panel</h3>
                    <NavLink to="/dashboard/user/profile" className="list-group-item list-group-item-action">Profile</NavLink>
                    <NavLink to="/dashboard/user/orders" className="list-group-item list-group-item-action">All Orders</NavLink>
                </div>

            </div>
        </>
    )
}

export default Usermenu
