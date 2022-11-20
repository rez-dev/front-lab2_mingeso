import { useEffect, useState } from "react";
import { Container, Row, Col, Table, Button, Alert } from "react-bootstrap";
import axios from 'axios';

const ListarRelojes = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [messageAlert, setMessageAlert] = useState('');
    const [relojes, setRelojes] = useState([]);

    const obtenerRelojes = async () => {
        try {
            let url = 'http://localhost:8082/reloj/all';
            let response = await axios.get(url);
            if (response.status === 200) {
                setRelojes(response.data);
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        obtenerRelojes();
    }, []);

    return (
        <Container style={{marginTop: '70px'}}>
            <Row>
                <Col>
                    <h1>Listado de relojes</h1>
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
                            <th>Hora</th>
                            <th>Rut Empleado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {relojes.map((reloj) => (
                                <tr key={reloj.id}>
                                    <td>{reloj.id}</td>
                                    <td>{reloj.fecha}</td>
                                    <td>{reloj.hora}</td>
                                    <td>{reloj.rut_empleado_reloj}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default ListarRelojes;