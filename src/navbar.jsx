import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar(props) {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container fluid>
                    <Navbar.Brand href="/">Mployee</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/employees">Employees</Nav.Link>
                        <Nav.Link href="/pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            {props.children}
        </>
    );
}

export default NavigationBar;