import React, {} from 'react';  // don't even know if this is necessary.
import ReactDOM from 'react-dom/client';

function Home(){

    return (
        <>
            <div className="container-fluid bg-dark text-white d-flex align-items-center" style={{minHeight: '100vh'}}>
                <div className="container">
                    <div className="row align-items-center">
                        
                        {/* Text Section */}
                        <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
                            <h1 className="display-4 fw-bold">Hello there</h1>
                            <p className="lead">
                                Welcome to <span className='fw-bold'>Mployee</span>. I am the CEO here, what can we do for you today.
                            </p>
                            <button className="btn btn-primary mt-3 px-4 py-2">
                                Get Started
                            </button>
                        </div>

                        {/* Image Section */}
                        <div className="col-lg-6 text-center">
                            <img 
                                src="/china.png" 
                                alt="Rex" 
                                className="img-fluid rounded-5"
                                style={{maxHeight: '500px', objectFit: 'contain'}}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;