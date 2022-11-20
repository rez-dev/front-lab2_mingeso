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
import AgregarAutorizacion1 from './pages/AgregarAutorizacion1';
import AgregarAutorizacion2 from './pages/AgregarAutorizacion2';
import AgregarAutorizacion3 from './pages/AgregarAutorizacion3';
import SubirReloj from './pages/SubirReloj';
import AgregarJustificacion from './pages/AgregarJustificacion';
// import NewAgregarAutorizacion from './pages/NewAgregarAutorizacion';
// import Test2 from './pages/Test2';

function App() {
  return (
    <Layout>
      <Container>
        <Routes>
          <Route path='/' element={<Index />} exact/>
          <Route path='/planilla/all' element={<ListarPlanillas />}exact/>
          <Route path='/autorizacion/all' element={<ListarAutorizaciones />}exact/>
          <Route path='/justificacion/all' element={<ListarJustificaciones />}exact/>
          <Route path='/empleado/all' element={<ListarEmpleados />}exact/>
          <Route path='/reloj/all' element={<ListarRelojes />}exact/>
          <Route path='/autorizacion/agregar' element={<AgregarAutorizacion1 />}exact/>
          {/* <Route path='/autorizacion/agregar2' element={<AgregarAutorizacion2 />}exact/> */}
          <Route path='/autorizacion/agregar3' element={<AgregarAutorizacion3 />}exact/>
          <Route path='/justificacion/agregar' element={<AgregarJustificacion />}exact/>
          <Route path='/reloj/agregar' element={<SubirReloj />} exact/>
          {/* <Route path='/test' element={<NewAgregarAutorizacion />} exact/>
          <Route path='/test2' component={<Test2 />} exact/> */}
        </Routes>
      </Container>
    </Layout>
  );
}

export default App;
