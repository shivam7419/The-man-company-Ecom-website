import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <h4 className='text-center'>All Are Reserved © 2024 Copyright : The Man Company</h4>
            <p className='text-center mt-3'>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Conatct</Link>
                <Link to='/policy'>Privacy Policy</Link>
            </p>

        </div>
    )
}

export default Footer
