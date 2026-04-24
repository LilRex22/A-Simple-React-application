import {outlet} from 'react-router-dom';
import Footer from './footer';
import NavigationBar from './navbar';

function Layout() {
    return (
        <>
            <NavigationBar />
            <main>
                {outlet}
            </main>
            <Footer />
        </>
    )
}

export default Layout;