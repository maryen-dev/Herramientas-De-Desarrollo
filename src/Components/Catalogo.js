import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heroImg from '../img/hero1.png';
import orcaVideo from '../img/retorno.mp4';
import Header from './Header';
import ProductList from './ProductList';
import styles from '../Estilo/UsuarioPage.css'; 


function Catalogo() {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(true);
  const showText = true;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnd = () => {
      setTimeout(() => setShowVideo(false), 400); 
    };
  
    video.addEventListener("ended", handleEnd);
    return () => video.removeEventListener("ended", handleEnd);
  }, []);

  return (
    <div className="usuario-container">
      <Header />
      <div className="productListSection">
        <ProductList />
      </div>
    </div>
  );
}

export default Catalogo;