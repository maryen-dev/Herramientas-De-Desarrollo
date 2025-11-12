import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ nombre: '', apellidos: '' });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.nombre) {
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  
  const goToHome = () => {
    navigate('/usuariopage');
  };


  return (
    <header className="header">
      <div className="header-left">
        <div className="header-logo" onClick={goToHome} style={{ cursor: 'pointer' }}>
          <h2>Joyería Marley</h2>
        </div>
          {user.nombre && (
          <span className="user-name">
            Hola, {user.nombre} {user.apellidos}
          </span>
        )}


        <nav className="header-nav">
          <Link to="/catalogo">Catálogo</Link>
          <Link to="/carrito">Carrito</Link>
          <Link to="/reclamo">Reclamo</Link>
          <Link to="/terminos">Términos y Condiciones</Link>
        </nav>
      </div>

      <div className="header-right">
        <button onClick={handleLogout} className="logout-btn">
          Cerrar Sesión
        </button>
      </div>
    </header>
  );
}
