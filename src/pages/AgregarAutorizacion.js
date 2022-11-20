// import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import React, { useState } from 'react';
import axios from 'axios';


const AgregarAutorizacion = () => {
    const [autorizacion, setAutorizacion] = useState({
        estado: '',
        rut_empleado_autorizacion: ''
    });

    const handleInputChange = (event) => {
        // console.log(event.tarjet.name);
        setAutorizacion({
            ...autorizacion,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // const user = {
        //   name: this.state.name
        // }

        setAutorizacion({
            ...autorizacion,
            [event.target.name]: event.target.value
        });

        axios.post('http://localhost:8082/autorizacion', autorizacion)
          .then(res=>{
            console.log(res);
            console.log(res.data);
            window.location = "/autorizacion/all" //This line of code will redirect you once the submission is succeed
          })
    }

    return (
        <Container style={{marginTop: '70px'}}>
            <Row>
                <Col>
                    <h1>Agregar autorización</h1>
                </Col>
            </Row>
            <form className='col' onSubmit={handleSubmit}><br></br>

                    {/* <div className='col-md-3'>
                        <input
                            placeholder='Ingrese Estado'
                            className='form-control'
                            type='text'
                            name='estado'
                            onChange = {handleInputChange}
                        ></input>
                    </div> */}
                    <label>Estado</label>
                    <div className='col-md-3'>  
                        <select 
                            placeholder='Ingrese Estado'
                            className='form-control'
                            type='text'
                            name='estado'
                            onChange = {handleInputChange}>
                        <option selected>Seleccione el estado</option>
                        <option value='0'>No autorizada</option>             
                        <option value='1'>Autorizada</option>           
                        </select>  
                    </div><br></br>
                    <label>Rut empleado</label>
                    <div className='col-md-3'>
                        <input
                            placeholder='Ingrese rut empleado'
                            className='form-control'
                            type='text'
                            name = 'rut_empleado_autorizacion'
                            onChange = {handleInputChange}
                        ></input>
                    </div><br></br>

                    <div className='col-md-3'>
                        <button className="btn btn-primary" type="submit">Agregar autorización</button>
                    </div>
            </form>
            <h3>{autorizacion.estado} - {autorizacion.rut_empleado_autorizacion}</h3>


        </Container>
    );
}

export default AgregarAutorizacion;