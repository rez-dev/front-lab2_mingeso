// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { Container, Row, Col, Table, Button,Form, Alert } from "react-bootstrap";

function AgregarAutorizacion1() {
    return (
        <Container style={{marginTop: '70px'}}>
            <Row>
                <Col>
                    <h1>Agregar autorización</h1>
                </Col>
            </Row>
            <Form>
                <Form.Group className="mb-3" controlId="estado">
                    <Form.Label for='estado'>Estado</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option value="0">No autorizada</option>
                        <option value="1">Autorizada</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="rut_empleado_autorizacion">
                    <Form.Label for='rut_empleado_autorizacion'>Rut Empleado</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default AgregarAutorizacion1;