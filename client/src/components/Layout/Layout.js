import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Toaster } from 'react-hot-toast'
import 'react-toastify/dist/ReactToastify.css'

const Layout = (props) => {
    return (
        <div>
            <Header />
            <main style={{ minHeight: "70vh" }}>
                {props.children}
            </main>
            <Toaster />
            <Footer />
        </div>
    )
}

export default Layout
