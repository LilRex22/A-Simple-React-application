import { useState } from 'react';
import PopUp from './popUp';


function Card({ id, name = 'User', image, description, updateProfile }) {  // object destructuring is going on here
    const [value, setValue] = useState("!");
    // const [msg, setMsg] = useState(false);
    
    return (
        <div className="card shadow-sm w-100 overflow-hidden mt-3">
            
            <div className="d-flex flex-column flex-md-row">
                
                {/* Image */}
                <div className="w-100" style={{ flex: '1 1 100%', maxWidth: '100%'}}>
                    <img 
                        src={image} 
                        alt={name}
                        className="img-fluid h-100 w-100"
                        style={{objectFit: 'cover'}}
                    />
                </div>

                {/* Content */}
                <div className="card-body d-flex flex-column justify-content-between">
                    
                    <div>
                        <h4 className="fw-bold mb-2">{name}{value}</h4>

                        <p className="text-muted mb-3" style={{wordBreak: 'break-word'}}>
                            {description}
                        </p>
                    </div>

                    <div>
                        <small className="text-muted d-block mb-2">
                            Last updated 3 mins ago
                        </small>

                        <button 
                            className="btn btn-info"
                            onClick={() => {
                                if ((value + '!').length < 4) {
                                    setValue(value + '!');
                                }
                            }}
                        >
                            View
                        </button>
                        
                        {/* here we are rendering the PopUp component that we imported at the top of this file. This component is a modal that will show up when the user clicks the "View" button. The state variable "value" is used to keep track of how many times the user has clicked the "View" button, and it will add an exclamation mark to the name each time it is clicked, up to a maximum of three exclamation marks. */}
                        <PopUp id={id} empName={name} empDescription={description} image={image} fn={updateProfile}/>
                    </div>

                </div>

            </div>
        </div>
    )
}


export default Card;