// import React from 'react';
import { Container } from 'react-bootstrap';
import { Row , Button} from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import React from 'react';

const MenuAutorizacion = () => {

    return (
        <Container style={{marginTop: '70px'}}>
            <Row>
                <Col>
                    <h1>Menú de autorización</h1>
                    <br></br>
                </Col>
            </Row>
            <Row>
                <Col lg="3" sm="4">
                    <Button href="/autorizacion/all"> Listar autorizaciones </Button>
                    <br></br>
                    <br></br>
                    <Button href="/autorizacion/agregar"> Agregar autorización </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default MenuAutorizacion;