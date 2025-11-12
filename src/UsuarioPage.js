import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PagPrincipal from './img/PagPrincipal.png';
import Header from './Components/Header';


function UsuarioPage() {
  const navigate = useNavigate();


  return (
    <div className="usuario-container">
      <Header />
      <div className="usuario-main" style={{ textAlign: 'center', marginTop: '50px' }}>
        <img
          src={PagPrincipal}
          alt="Página Principal"
          style={{
            width: '300px',
            height: 'auto',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          }}
        />
      </div>
    </div>
  );
}

export default UsuarioPage;