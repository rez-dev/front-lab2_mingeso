import { useEffect, useState } from "react";
import { Container, Row, Col, Table, Button, Alert } from "react-bootstrap";
import axios from 'axios';

const ListarJustificaciones = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [messageAlert, setMessageAlert] = useState('');
    const [justificaciones, setJustificaciones] = useState([]);

    const obtenerJustificaciones = async () => {
        try {
            let url = 'http://localhost:8082/justificacion/all';
            let response = await axios.get(url);
            if (response.status === 200) {
                setJustificaciones(response.data);
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        obtenerJustificaciones();
    }, []);

    return (
        <Container style={{marginTop: '70px'}}>
            <Row>
                <Col>
                    <h1>Listado de justificaciones</h1>
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
                            <th>Fecha</th>
                            <th>Estado</th>
                            <th>Rut empleado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {justificaciones.map((justificacion) => (
                                <tr key={justificacion.id}>
                                    <td>{justificacion.id}</td>
                                    <td>{justificacion.fecha}</td>
                                    <td>{justificacion.estado}</td>
                                    <td>{justificacion.rut_empleado_justificacion}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default ListarJustificaciones;