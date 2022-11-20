// import React from 'react';
import { Container } from 'react-bootstrap';
import { Row , Button} from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import React from 'react';

const MenuJustificacion = () => {

    return (
        <Container style={{marginTop: '70px'}}>
            <Row>
                <Col>
                    <h1>Menú de justificación</h1>
                    <br></br>
                </Col>
            </Row>
            <Row>
                <Col lg="3" sm="4">
                    <Button href="/justificacion/all"> Listar justificaciones </Button>
                    <br></br>
                    <br></br>
                    <Button href="/justificacion/agregar"> Agregar justificación </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default MenuJustificacion;