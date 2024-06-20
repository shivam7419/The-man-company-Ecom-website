import React from 'react'
import Layout from '../components/Layout/Layout'
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
    return (
        <Layout title={"Contact us"}>
            <div className="row contactus ">
                <div className="col-md-6 ">
                    <img
                        src="https://media.istockphoto.com/id/1091858450/photo/contact-us-sign-on-a-wooden-desk.webp?s=2048x2048&w=is&k=20&c=lGivkcCOZD-k50DK3QbcSLWBiNL-q-gGxT3D3qBUtiE="
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-4">
                    <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
                    <p className="text-justify mt-2">
                        any query and info about prodduct feel free to call anytime we 24X7
                        vaialible
                    </p>
                    <p className="mt-3">
                        <BiMailSend /> : www.help@TheManCompany.com
                    </p>
                    <p className="mt-3">
                        <BiPhoneCall /> : 0123456789
                    </p>
                    <p className="mt-3">
                        <BiSupport /> : 1800-0000-0000 (toll free)
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default Contact
