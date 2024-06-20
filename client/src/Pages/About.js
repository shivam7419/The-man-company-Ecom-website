import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
    return (
        <Layout title={"About us - Ecom app"}>
            <div className="row contactus ">
                <div className="col-md-6 ">
                    <img
                        src="https://media.istockphoto.com/id/487018282/photo/about-us-text-on-wooden.webp?b=1&s=170667a&w=0&k=20&c=QeYjmag8YoMaAcJLNnwTvCh96-V1yV8qHtoRg9wG5tw="
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-4">
                    <p className="text-justify mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                        officiis obcaecati esse tempore unde ratione, eveniet mollitia,
                        perferendis eius temporibus dicta blanditiis doloremque explicabo
                        quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
                        accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
                        commodi illum quidem neque tempora nam.
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default About
