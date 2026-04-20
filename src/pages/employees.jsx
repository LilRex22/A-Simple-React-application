import React, { useState } from 'react';  // don't even know if this is necessary.
import ReactDOM from 'react-dom/client';
// the above two are important to ensure that we can use React and render our components to the DOM.

// imorting uuid to generate unique keys for our list items.
// import { v4 as uuidv4 } from 'uuid';

// importing our app components.
import Card from '../card'
import UpdateProfile from '../updateProfile';
import NavigationBar from '../navbar';


function Employees(){
    const [profiles, setProfiles] = useState([
        {id: 1, name: 'Jonathan', image: '/bg-dev.jpeg', description: 'Hey there, I\'m Jonathan, the senior software developer here. I\'m 26 years old with 10 years of experience. I look forward to working with you.'},
        {id: 2, name: 'Michael', image: '/bg-dev.jpeg', description: 'Hey there, it\'s me Michael, the data analyst with 5 years of experience. I look forward to working with you.'},
        {id: 3, name: 'Alphonso', image: '/bg-dev.jpeg', description: 'Yo!, it\'s your boy Alphonso, the media lead. I\'m responsible for the company\'s online appearance, let\'s work together.'},
        {id: 4, name: 'Miguel', image: '/bg-dev.jpeg', description: 'Hello, it\'s Miguel, I am the sales director. Nice to meet you.'}
    ]);

    function updateProfile(id, name, description, image){
        console.log(id, name, description, image)
        const updatedProfiles = profiles.map((profile)=>{
            if (id == profile.id) {
                return {id: id, name: name, description: description, image: image}
            }
            return profile;
        });
        setProfiles(updatedProfiles);
    }
    
    function newProfile(name, description, image){
        const newId = profiles.length > 0 ? Math.max(...profiles.map(p => p.id)) + 1 : 1;
        const newProfiles = [...profiles, { id: newId, name, description, image }];
        setProfiles(newProfiles);
    }

    return (
    <>
        <div className="container">
            <div className="row justify-content-center">
                {/* because the arrow fn below uses curly braces, we explicitly need to use the return keyword. */}
                {profiles.map((user)=>{
                    return(
                        <div className="col-12 col-lg-6">
                            <Card id={user.id} name={user.name} image={user.image} description={user.description} updateProfile={updateProfile} key={user.id}/>
                        </div>
                    )
                })}
                <div className="container mt-2">
                    <UpdateProfile newProfile={newProfile}/>
                </div>
            </div>
        </div>
    </>
)
}

export default Employees;
