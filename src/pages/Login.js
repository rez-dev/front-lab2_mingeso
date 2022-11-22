import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col} from 'react-bootstrap';

const Login = () => {
    const [usuario, setUsuario] = useState("");

    const [clave, setClave] = useState("");

    const authenticateUser = (usuario, clave) => {
        const credentials = {
            usuario: usuario,
            clave: clave
        }
        //console.log(credentials);
        axios.post("http://localhost:8082/planilla/autenticar", credentials)
            .then(response => {
                let token = response.data.jwtToken;
                console.log(token);
                console.log(response.data);
                localStorage.setItem('jwtToken', token);
            })
    };
    return (
        <Container style={{marginTop: '70px'}}>
            <Row>
                <Col>
                    <h1>Iniciar Sesión</h1>
                </Col>
            </Row>
            <Row>
                <Col>     
                    <Form>
                        <Form.Label>Usuario</Form.Label>
                        <Form.Group className='col-md-3' controlId="usuario">
                            
                            <Form.Control
                                autoFocus
                                value={usuario}
                                onChange={(e) => setUsuario(e.target.value)}
                            />
                        </Form.Group><br></br>
                        <Form.Label>Clave</Form.Label>
                        <Form.Group className='col-md-3' controlId="clave">
                            
                            <Form.Control
                                value={clave}
                                onChange={(e) => setClave(e.target.value)}
                            />
                        </Form.Group>
                        <Button block size="lg" className='mt-4' /* type="submit" */ onClick={()=>authenticateUser(usuario,clave)}>
                            Iniciar Sesión
                        </Button>
                    </Form>
                </Col>
            </Row>   
        </Container> 
    )
};

export default Login;