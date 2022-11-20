import { Nav, Navbar, Container } from 'react-bootstrap';

const Menu = () => {
    return (
        <Navbar bg="dark" variant="dark" fixed="top" >
            <Container>
                <Navbar.Brand href="/">Mstgo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar"/>
                    <Navbar.Collapse id="responsive-navbar">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Inicio</Nav.Link>
                            <Nav.Link href="/planilla/all">Listado de planillas</Nav.Link>
                            <Nav.Link href="/autorizacion/all">Listado de autorizaciones</Nav.Link>
                            <Nav.Link href="/justificacion/all">Listado de justificaciones</Nav.Link>
                            <Nav.Link href="/empleado/all">Listado de empleados</Nav.Link>
                            <Nav.Link href="/autorizacion/agregar3">Agregar Autorización</Nav.Link>
                            <Nav.Link href="/justificacion/agregar">Agregar Justificación</Nav.Link>
                            <Nav.Link href="/reloj/agregar">Subir Reloj</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Menu;