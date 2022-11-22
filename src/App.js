import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from './Layout';
import { Container } from 'react-bootstrap';
import Index from './pages/Index';
import ListarPlanillas from './pages/ListarPlanillas';
import ListarAutorizaciones from './pages/ListarAutorizaciones';
import ListarJustificaciones from './pages/ListarJustificaciones';
import ListarEmpleados from './pages/ListarEmpleados';
import ListarRelojes from './pages/ListarRelojes';
import AgregarAutorizacion from './pages/AgregarAutorizacion';
import SubirReloj from './pages/SubirReloj';
import AgregarJustificacion from './pages/AgregarJustificacion';
import MenuPlanilla from './pages/MenuPlanilla';
import MenuAutorizacion from './pages/MenuAutorizacion';
import MenuJustificacion from './pages/MenuJustificacion';
import Login from './pages/Login';

function App() {
  return (
    <Layout>
      <Container>
        <Routes>
          {/* <Route path='/' element={<Index />} exact/> */}
          <Route path='/planilla/all' element={<ListarPlanillas />}exact/>
          <Route path='/autorizacion/all' element={<ListarAutorizaciones />}exact/>
          <Route path='/justificacion/all' element={<ListarJustificaciones />}exact/>
          <Route path='/empleado/all' element={<ListarEmpleados />}exact/>
          <Route path='/reloj/all' element={<ListarRelojes />}exact/>
          <Route path='/autorizacion/agregar' element={<AgregarAutorizacion />}exact/>
          <Route path='/justificacion/agregar' element={<AgregarJustificacion />}exact/>
          <Route path='/reloj/agregar' element={<SubirReloj />} exact/>

          <Route path='/planilla/menu' element={<MenuPlanilla />} exact/>
          <Route path='/autorizacion/menu' element={<MenuAutorizacion />} exact/>
          <Route path='/justificacion/menu' element={<MenuJustificacion />} exact/>

          <Route path='/login' element={<Login />} exact/>
        </Routes>
      </Container>
    </Layout>
  );
}

export default App;
