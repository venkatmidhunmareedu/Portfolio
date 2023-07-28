import React, { useRef } from "react";
import { Fade } from "react-awesome-reveal"
import { TypeAnimation } from 'react-type-animation';
const Content = () => {
    return (
        <Fade>
            <div className="font-1 w-4">
                <div className="container">
                    <div className="row container d-flex justify-content-center align-items-center vh-100 vw-100">
                        <div className="col-lg-12 col-sm-12 text-center">
                            <h1 className="text-center"><TypeAnimation
                                sequence={['Hello!', 1000, 'नमस्ते!', 1000,'హలో!',1000]}
                                style = {{ fontSize: '2em' }}
                                repeat={Infinity}
                            /></h1><br />
                            <p className="fs-5" > I 'm Midhun, a <span className="font-1 w-9">web designer</span>. I specialize in UI design using frameworks like React Js and Next Js. With expertise in wireframe creation and a creative design mindset, I craft visually appealing and user-friendly websites. I'm also skilled in C, Python, Java, and back-end technologies like Django, Node.js, and Express.js. Let's create captivating web experiences together!</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default Content