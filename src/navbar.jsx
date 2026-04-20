import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function NavigationBar(props) {
    const navlinks = [
        {Name: 'Home', Path: '/'},
        {Name: 'Employees', Path: '/employees'},
        {Name: 'Pricing', Path: '/pricing'}
    ]
    
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container fluid>
                    <Navbar.Brand href="/">Mployee</Navbar.Brand>
                    <Nav className="me-auto">
                        {navlinks.map((link)=>{
                            return (
                            <Nav.Link 
                                as={NavLink} 
                                to={link.Path} 
                                key={link.Path} 
                                end={link.Path === '/'}
                                style={({isActive})=>({
                                    fontWeight: isActive ? 'bold' : 'normal',
                                    color: isActive ? 'white' : 'rgba(255, 255, 255, 0.55)'
                                })}>
                                    {link.Name}
                            </Nav.Link>)
                        })}
                    </Nav>
                </Container>
            </Navbar>
            {props.children}
        </>
    );
}

export default NavigationBar;