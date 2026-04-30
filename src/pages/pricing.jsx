import { useNavigate, useParams } from "react-router-dom"
import { useState } from "react";


function Pricing(){
    const [value, setValue] = useState('');
    const nav = useNavigate();
    let {param} = useParams(); 
    console.log(param);

    const submit = (e)=>{
        e.preventDefault();
        nav('/pricing/' + value) // this sets the param value to 'value', would be important in the page the url take you to.
    }

    return (
        <>
            <div className="text-center">
                <h1 className='text-center mt-5 fw-bold display-4'>Pricing Page</h1>
                <p>Multiple packages to browse across...</p>
                <form className="container d-flex justify-content-center align-items-center gap-1"
                onSubmit={submit}>
                    <input type="text" onChange={(e)=>setValue(e.target.value)} placeholder="search a package" className="form-control w-50"/>
                    <button type="submit" className="btn btn-info">Search</button>
                </form>
            </div>

        </>
    )
}

export default Pricing