import { useEffect, useState } from "react";
import { Container, Row, Col, Table, Alert } from "react-bootstrap";
import axios from 'axios';

const ListarPlanillas = () => {
    const [showAlert, setShowAlert] = useState(false);
    // const showAlert= useState(false);
    const [messageAlert, setMessageAlert] = useState('');
    // const messageAlert = useState('');
    const [planillas, setPlanillas] = useState([]);

    const config = {
        headers: { Authorization: `Bearer ${localStorage.jwtToken}` }
    };

    const obtenerPlanillas = async () => {
        try {
            let url = 'http://localhost:8082/planilla/all';
            let response = await axios.get(url,config);
            if (response.status === 200) {
                setPlanillas(response.data);
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        obtenerPlanillas();
    }, []);

    return (
        <Container style={{marginTop: '70px'}}>
            <Row>
                <Col>
                    <h1>Listado de planillas</h1>
                </Col>
            </Row>
            {/* <Row>
                <Col lg="3" sm="4">
                    <Button onClick={handleSubmit}> Calcular Planillas </Button>
                </Col>
            </Row> */}
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
                            <th>Nombre Empleado</th>
                            <th>Categoría</th>
                            <th>Años de servicio</th>
                            <th>Sueldo fijo mensual</th>
                            <th>Bonificación Años Servicio</th>
                            <th>Monto horas extras</th>
                            <th>Monto Descuentos</th>
                            <th>Sueldo bruto</th>
                            <th>Cotización Previsional</th>
                            <th>Cotización Salud</th>
                            <th>Sueldo Final</th>
                            </tr>
                        </thead>
                        <tbody>
                            {planillas.map((planilla) => (
                                <tr key={planilla.id}>
                                    <td>{planilla.rut_empleado_planilla}</td>
                                    <td>{planilla.nombre_completo}</td>
                                    <td>{planilla.id_categoria_planilla}</td>
                                    <td>{planilla.agnos_servicio}</td>
                                    <td>{planilla.sueldo_fijo_mensual}</td>
                                    <td>{planilla.monto_bono_agnos_servicio}</td>
                                    <td>{planilla.monto_bonos_horas_extras}</td>
                                    <td>{planilla.monto_descuentos}</td>
                                    <td>{planilla.sueldo_bruto}</td>
                                    <td>{planilla.cotizacion_previsional}</td>
                                    <td>{planilla.cotizacion_salud}</td>
                                    <td>{planilla.monto_sueldo_final}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default ListarPlanillas;