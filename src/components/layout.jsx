import {Outlet} from 'react-router-dom';
import Footer from './footer';
import NavigationBar from './navbar';

function Layout() {
    return (
        <>
        <div className="d-flex flex-column min-vh-100">
            <NavigationBar />

            <div className="flex-grow-1"> {/* did this in order to push the footer to the bottom of the page */}
                <Outlet /> {/* // every other page or components goes here */}
            </div>

            <Footer />
        </div>
        </>
    );
}

export default Layout;