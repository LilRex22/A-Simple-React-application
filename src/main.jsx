import ReactDOM from 'react-dom/client';
import React from 'react';
// the above two are important to ensure that we can use React and render our components to the DOM.

// our react routing imports
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// importing our app components.
import Card from './components/card'
import UpdateProfile from './components/updateProfile';
import NavigationBar from './components/navbar';
import Employees from './pages/employees';
import Home from './pages/home';


function App(){
    return (
        <BrowserRouter> {/* this must wrap the entire app to ensure that all components have access to the routing functionality. */}
            <NavigationBar>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/employees' element={<Employees />}/>
                </Routes>
            </NavigationBar>
        </BrowserRouter>
    )
}

export default App;
// Mount the App to the DOM
ReactDOM.createRoot(document.getElementById('root')).render(<App />);