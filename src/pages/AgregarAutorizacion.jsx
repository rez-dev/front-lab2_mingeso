import React, { Component } from 'react'
import AutorizacionService from '../services/AutorizacionService';

class AgregarAutorizacion extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            estado: '',
            rut_empleado_autorizacion: '',
        }
        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changeEstadoHandler = this.changeEstadoHandler.bind(this);
        this.changeRutHandler = this.changeRutHandler.bind(this);
        this.saveAutorizacion = this.saveAutorizacion.bind(this);

    }

    saveAutorizacion = (e) => {
        e.preventDefault();
        let autorizacion = {id: this.state.id,
                    estado: this.state.estado,
                    rut_empleado_autorizacion: this.state.rut_empleado_autorizacion};

        AutorizacionService.createBook(autorizacion).then(res =>{
            this.props.history.push('/autorizacion/all');
        });
    }

    changeIdHandler= (event) => {
        this.setState({id: event.target.value});
    }
    
    changeEstadoHandler= (event) => {
        this.setState({estado: event.target.value});
    }

    changeRutHandler= (event) => {
        this.setState({rut_empleado_autorizacion: event.target.value});
    }

    cancel(){
        this.props.history.push('/books/all');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Add Book</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Id: </label>
                                            <input placeholder="Id" name="id" className="form-control" 
                                                value={this.state.id} onChange={this.changeIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Estado: </label>
                                            <input placeholder="Estado" name="estado" className="form-control" 
                                                value={this.state.estado} onChange={this.changeEstadoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Rut Empleado: </label>
                                            <input placeholder="Rut Empleado" name="rut_empleado_autorizacion" className="form-control" 
                                                value={this.state.rut_empleado_autorizacion} onChange={this.changeRutHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveAutorizacion}>Guardar Autorizacion</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancelar</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default AgregarAutorizacion
