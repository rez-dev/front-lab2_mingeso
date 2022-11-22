import { Nav, Navbar, Container } from 'react-bootstrap';

const Menu = () => {

    const logout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    }

    return (
        <Navbar bg="dark" variant="dark" fixed="top" >
            <Container>
                <Navbar.Brand href="/">Mstgo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar"/>
                    <Navbar.Collapse id="responsive-navbar">
                        <Nav className="me-auto">
                            <Nav.Link href="/login">Iniciar Sesión</Nav.Link>
                            <Nav.Link href="/planilla/menu">Menú planillas</Nav.Link>
                            <Nav.Link href="/autorizacion/menu">Menú autorizaciones</Nav.Link>
                            <Nav.Link href="/justificacion/menu">Menú justificaciones</Nav.Link>
                            <Nav.Link href="/reloj/agregar">Agregar Reloj</Nav.Link>
                            <Nav.Link onClick={()=>logout()} >Cerrar Sesión</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Menu;