import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import AdminPage from './Components/AdminPage';
import UsuarioPage from './UsuarioPage';
import TermAndGrams from './Components/TermAndGrams';
import ProtectedRoute from './Components/ProtectedRoutes';
import Header from './Components/Header';
import Reclamo from './Components/Reclamo';
import AdminReclamos from './Components/AdminReclamos';
import VendedorPage from './Components/AdminProducts';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Register />} />
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
