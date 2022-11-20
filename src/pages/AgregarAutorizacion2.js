// // import Button from 'react-bootstrap/Button';
// // import Form from 'react-bootstrap/Form';
// import { Container, Row, Col, Table, Button,Form, Alert } from "react-bootstrap";
// import React, { useState } from 'react'
// import AutorizacionService from '../services/AutorizacionService';

// function AgregarAutorizacion1() {
//     // const [form, setForm] = useState({
//     //     estado: '', 
//     //     rut_empleado_autorizacion: ''
//     // })
//     let [form, setForm] = useState({
//         estado: '',
//         rut_empleado_autorizacion: ''
//     })

//     const [errors, setErrors] = useState({})

//     const handleEstadoChange = (e) => {
//         setForm({
//             ...form,
//             [e.target.estado]: e.target.value
//         })
//     }

//     const handleRutChange = (e) => {
//         setForm({
//             ...form,
//             [e.target.rut_empleado_autorizacion]: e.target.value
//         })
//     }

//     const [submitted, setSubmitted] = useState(false)

//     // const handleSubmit = (e) => {
//     //     e.preventDefault()
//     //     if(handleValidation() === true){
//     //         props.handleClick()
//     //         setSubmitted(true)
//     //     }
//     // }

//     const saveAutorizacion = (e) => {
//         e.preventDefault();
//         let autorizacion = {title: this.state.title,
//                     author: this.state.author,
//                     studentId: this.state.studentId};

//         AutorizacionService.createAutorizacion(autorizacion).then(res =>{
//             this.props.history.push('/autorizacion/all');
//         });
//     }

//     return (
//         <Container style={{marginTop: '70px'}}>
//             <Row>
//                 <Col>
//                     <h1>Agregar autorización</h1>
//                 </Col>
//             </Row>
//             <Form>
//                 <Form.Group className="mb-3" controlId="estado">
//                     {/* <Form.Label for='estado'>Estado</Form.Label>
//                     <Form.Select aria-label="Default select example">
//                         <option value="0">No autorizada</option>
//                         <option value="1">Autorizada</option>
//                     </Form.Select> */}
//                     <Form.Label for='estado'>Estado</Form.Label>
//                     <Form.Control type="text" id='estado' name='estado' value={form.estado} onChange={(e) => handleEstadoChange(e)}/>
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="rut_empleado_autorizacion">
//                     <Form.Label for='rut_empleado_autorizacion'>Rut Empleado</Form.Label>
//                     <Form.Control type="text" id='rut_empleado_autorizacion' name='rut_empleado_autorizacion' value={form.rut_empleado_autorizacion} onChange={(e) => handleRutChange(e)}/>
//                 </Form.Group>
//                 <Form.Group>
//                     <Form.input type="submit" value="Agregar" className="btn btn-success" onClick={saveAutorizacion}/>
                    
//                     {/* <Form.Label htmlFor='zipcodeInput' style={labelStyle}>
//                             Zipcode: <span>*</span>
//                     </Form.Label> */}
//                     {/* <Form.input      
//                         style={inputStyle}
//                         id='zipcodeInput'
//                         name='zipcode'
//                         type='text'
//                         placeholder='Please type your zipcode'
//                         value={form.zipcode}
//                         onChange={(e) => handleChange(e)}>
//                     </Form.input> */}
//                     {/* <input
//                         style={inputStyle}
//                         id='zipcodeInput'
//                         name='zipcode'
//                         value={form.zipcode}
//                         onChange={(e) => handleChange(e)}
//                     /> */}
//                 </Form.Group>
//                 <Button variant="primary" type="submit">
//                     Submit
//                 </Button>
//             </Form>
//         </Container>
//     );
// }

// export default AgregarAutorizacion1;