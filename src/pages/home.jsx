import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, {} from 'react';  // don't even know if this is necessary.
import ReactDOM from 'react-dom/client';

function Home(){

    const tl = gsap.timeline()

    useGSAP(()=>{
        tl.from('#pic', {x: -150, opacity: 0, borderRadius: '0%',duration:1})
        tl.from('#title', {y: -50, opacity: 0, duration: 1})
        tl.from('#sub-title', {opacity: 0, duration: 1.5}, '-=0.3')
        tl.from('#btn', {scale: 0, duration: .5}, '-=1')
    }, [])


    return (
        <>
            <div className="container-fluid bg-dark text-white d-flex align-items-center" style={{minHeight: '100vh'}}>
                <div className="container">
                    <div className="row align-items-center">
                        
                        {/* Text Section */}
                        <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
                            <h1 id="title" className="display-4 fw-bold">Hello there</h1>
                            <p id="sub-title" className="lead">
                                Welcome to <span className='fw-bold'>Mployee</span>. I am the CEO here, what can we do for you today.
                            </p>
                            <button id='btn' className="btn btn-primary mt-3 px-4 py-2">
                                Get Started
                            </button>
                        </div>

                        {/* Image Section */}
                        <div className="col-lg-6 text-center">
                            <img
                                id='pic'
                                src="/china.png" 
                                alt="Rex" 
                                className="img-fluid w-75"
                                style={{maxHeight: '500px', objectFit: 'contain', borderRadius: '50%'}}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;