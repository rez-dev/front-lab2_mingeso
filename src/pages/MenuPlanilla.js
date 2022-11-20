// import React from 'react';
import { Container } from 'react-bootstrap';
import { Row , Button} from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import React from 'react';
import axios from 'axios';

const MenuPlanilla = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.get('http://localhost:8082/planilla/calcularPlanilla/all')
          .then(res=>{
            console.log(res);
            console.log(res.data);
            window.location = "/planilla/all" //This line of code will redirect you once the submission is succeed
          })
    }

    return (
        <Container style={{marginTop: '70px'}}>
            <Row>
                <Col>
                    <h1>Menú de Planillas</h1>
                    <br></br>
                </Col>
            </Row>
            <Row>
                <Col lg="3" sm="4">
                    <Button onClick={handleSubmit}> Calcular planillas </Button>
                    <br></br>
                    <br></br>
                    <Button href="/planilla/all"> Listar planillas </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default MenuPlanilla;