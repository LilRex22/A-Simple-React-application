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
import Layout from './components/layout'
import Pricing from './pages/pricing'
import Packages from './pages/packages'

function App(){
    return (
        <BrowserRouter> {/* this must wrap the entire app to ensure that all components have access to the routing functionality. */}
                <Routes>
                    <Route path='/' element={<Layout />}>
                        {/* // this is basically the outlet we defined at layout */}
                        <Route index element={<Home />} />
                        <Route path='employees' element={<Employees />} />
                        <Route path='pricing' element={<Pricing />} />
                        <Route path='pricing/:param' element={<Packages />} />
                    </Route>
                </Routes>
        </BrowserRouter>
    )
}

export default App;
// Mount the App to the DOM
ReactDOM.createRoot(document.getElementById('root')).render(<App />);