import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import AdminPage from './Components/AdminPage';
import UsuarioPage from './Components/UsuarioPage';
import TermAndGrams from './Components/TermAndGrams';
import ProtectedRoute from './Components/ProtectedRoutes';
import Header from './Components/Header';
import Catalogo from './Components/Catalogo';
import Cart from "./Components/Cart";
import Pago from "./Components/Pago";
import Resumen from "./Components/Resumen";
import Reclamo from './Components/Reclamo';
import AdminReclamos from './Components/AdminReclamos';
import VendedorPage from './Components/AdminProducts';
import AdminUser from './Components/AdminUser';
import AdminVentas from "./Components/AdminVentas";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Register />} />
      <Route path="/carrito" element={<Cart />} />
      <Route path="/pago" element={<Pago />} />
      <Route path="/resumen" element={<Resumen />} />
      <Route path="/catalogo" element={<Catalogo />} />
      <Route path="/admin/ventas" element={<AdminVentas />} />
      <Route path="/usuariopage" element={
        <ProtectedRoute>
          <UsuarioPage />
        </ProtectedRoute>
      } />
      <Route path="/admin" element={ <ProtectedRoute>
          <AdminPage />
        </ProtectedRoute>} />

      <Route path="/admin/reclamos" element={<ProtectedRoute>
          <AdminReclamos />
        </ProtectedRoute>} />

      
      <Route path="/terminos" element={
        <ProtectedRoute>
          <TermAndGrams />
        </ProtectedRoute>
      } />
      <Route
        path="/reclamo" element={
          <ProtectedRoute>
            <Reclamo />
          </ProtectedRoute>}/>

          <Route
        path="/admin/usuarios" element={
          <ProtectedRoute>
            <AdminUser />
          </ProtectedRoute>}/>


            <Route
  path="/admin/productos"
  element={
    <ProtectedRoute>
      <VendedorPage /> 
    </ProtectedRoute>
  }
/>


     
        

    </Routes>

     
    
  );
}

export default App;
