import { Container, Row, Col, Table, Button,Form, Alert } from "react-bootstrap";
import React, { useState } from 'react';
import axios from 'axios';

const AgregarJustificacion = () => {

    const [justificacion, setJustificacion] = useState({
        fecha: '',
        estado: '',
        rut_empleado_justificacion: ''
    });

    const handleInputChange = (event) => {
        // console.log(event.tarjet.name);
        setJustificacion({
            ...justificacion,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // const user = {
        //   name: this.state.name
        // }

        setJustificacion({
            ...justificacion,
            [event.target.name]: event.target.value
        });

        axios.post('http://localhost:8082/justificacion', justificacion)
          .then(res=>{
            console.log(res);
            console.log(res.data);
            window.location = "/justificacion/all" //This line of code will redirect you once the submission is succeed
          })
    }

    return (
        <Container style={{marginTop: '70px'}}>
            <Row>
                <Col>
                    <h1>Agregar justificación</h1>
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
                    <label>Fecha</label>
                    <div className='col-md-3'>  
                        <input
                            placeholder='Ingrese la fecha'
                            className='form-control'
                            type='date'
                            name = 'fecha'
                            onChange = {handleInputChange}
                        ></input> 
                    </div><br></br>

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
                            name = 'rut_empleado_justificacion'
                            onChange = {handleInputChange}
                        ></input>
                    </div><br></br>

                    <div className='col-md-3'>
                        <button className="btn btn-primary" type="submit">Agregar justificación</button>
                    </div>
            </form>
            <h3>{justificacion.fecha} - {justificacion.estado} - {justificacion.rut_empleado_justificacion}</h3>


        </Container>
    );


}

export default AgregarJustificacion;