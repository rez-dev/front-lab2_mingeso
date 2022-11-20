import { useEffect, useState } from "react";
import { Container, Row, Col, Table, Button, Alert } from "react-bootstrap";
import axios from 'axios';

const ListarAutorizaciones = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [messageAlert, setMessageAlert] = useState('');
    const [autorizaciones, setAutorizaciones] = useState([]);

    const obtenerAutorizaciones = async () => {
        try {
            let url = 'http://localhost:8082/autorizacion/all';
            let response = await axios.get(url);
            if (response.status === 200) {
                setAutorizaciones(response.data);
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        obtenerAutorizaciones();
    }, []);

    return (
        <Container style={{marginTop: '70px'}}>
            <Row>
                <Col>
                    <h1>Listado de autorizaciones</h1>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col lg="3" sm="4">
                </Col>
                <Col lg="9" sm="8">
                    <Alert variant="danger" style={{width: "100%", height:"40px"}} show={showAlert} >
                        <p style={{marginTop: "-8px"}}>{messageAlert}</p>
                    </Alert>
                </Col>
            </Row>
            <Row>
                <Col cols="12">
                    <Table striped className="mt-4">
                        <thead>
                            <tr>
                            <th>Id</th>
                            <th>Estado</th>
                            <th>Rut empleado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {autorizaciones.map((autorizacion) => (
                                <tr key={autorizacion.id}>
                                    <td>{autorizacion.id}</td>
                                    <td>{autorizacion.estado}</td>
                                    <td>{autorizacion.rut_empleado_autorizacion}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default ListarAutorizaciones;