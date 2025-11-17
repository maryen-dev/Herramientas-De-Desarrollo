import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heroImg from './img/hero1.png';
import orcaVideo from './img/retorno.mp4';
import Header from './Components/Header';
import ProductList from './Components/ProductList';
import styles from './Estilo/UsuarioPage.css'; 

function UsuarioPage() {
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
      
      <section
        className="hero"
        style={{
          backgroundImage: `url(${heroImg})`, 
        }}
      >
        {showVideo && (
          <video
            ref={videoRef}
            src={orcaVideo}
            autoPlay
            muted
            playsInline
            className="videoBackground"
            style={{
              opacity: showVideo ? 1 : 0,
            }}
          ></video>
        )}

        {showText && (
          <div className="overlayContent">
            <div className="textHeroLanding">
              <h1 className="textDisruptive">NEW COLLECTION</h1>
              <p className="heroSubtitle">
                Jewelry with a sea soul. Art you carry with you
              </p>
              <a href="/Components/Catalogo">
                <button className="heroButton">
                  Buy now
                </button>
              </a>
            </div>
          </div>
        )}
      </section>

      <div className="productListSection">
        <ProductList />
      </div>
    </div>
  );
}

export default UsuarioPage;