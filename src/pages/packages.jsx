import React from 'react'
import { useParams } from 'react-router-dom';

const Packages = () => {
    let {param} = useParams(); // the url parameter.

    return (
        <>  
            <div>
                <h1 className='fw-bold display-4 text-center mt-5'>Packages</h1>
                <p className='text-center'>Your search results for <span className='fw-bold fs-4'>"{param}"</span>: .......</p>
            </div>
        </>
    )
}

export default Packages