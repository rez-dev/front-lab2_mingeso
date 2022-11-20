import { useEffect, useState } from "react";
import { Container, Row, Col, Table, Button, Alert } from "react-bootstrap";
import axios from 'axios';

const ListarEmpleados = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [messageAlert, setMessageAlert] = useState('');
    const [empleados, setEmpleados] = useState([]);

    const obtenerEmpleados = async () => {
        try {
            let url = 'http://localhost:8082/empleado/all';
            let response = await axios.get(url);
            if (response.status === 200) {
                setEmpleados(response.data);
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        obtenerEmpleados();
    }, []);

    return (
        <Container style={{marginTop: '70px'}}>
            <Row>
                <Col>
                    <h1>Listado de empleados</h1>
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
                            <th>Rut</th>
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>Fecha nacimiento</th>
                            <th>Fecha ingreso empresa</th>
                            <th>Id categoría</th>
                            </tr>
                        </thead>
                        <tbody>
                            {empleados.map((empleado) => (
                                <tr key={empleado.rut}>
                                    <td>{empleado.rut}</td>
                                    <td>{empleado.nombres}</td>
                                    <td>{empleado.apellidos}</td>
                                    <td>{empleado.fecha_nacimiento}</td>
                                    <td>{empleado.fecha_ingreso_empresa}</td>
                                    <td>{empleado.id_categoria}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default ListarEmpleados;