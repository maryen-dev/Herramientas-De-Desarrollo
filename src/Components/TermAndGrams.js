import React from 'react';
import Header from './Header';
import '../Estilo/TermAndGrams.css';

export default function TermsAndGrams() {
  return (
    <div className="terms-container">
      <Header />
      <div className="terms-content">
        <h1>Términos y Condiciones</h1>
        <p>
          Bienvenido a <strong>Joyería Marley</strong>. Al acceder y utilizar nuestro sitio web, 
          aceptas los siguientes términos y condiciones. Por favor, léelos detenidamente antes 
          de registrarte o realizar una compra.
        </p>

        <h2>1. Aceptación de los términos</h2>
        <p>
          Al registrarte o usar nuestros servicios, confirmas que has leído, entendido y aceptado 
          los presentes términos. Si no estás de acuerdo, no deberás usar la plataforma.
        </p>

        <h2>2. Uso del sitio</h2>
        <p>
          Este sitio tiene como finalidad ofrecer productos de joyería y servicios relacionados. 
          El usuario se compromete a hacer un uso responsable, sin incurrir en actividades fraudulentas 
          ni difundir contenido inapropiado.
        </p>

        <h2>3. Registro y cuenta</h2>
        <p>
          Para acceder a ciertas funcionalidades, es necesario crear una cuenta con información veraz. 
          El usuario es responsable de mantener la confidencialidad de sus credenciales.
        </p>

        <h2>4. Compras y pagos</h2>
        <p>
          Los precios y la disponibilidad de productos pueden cambiar sin previo aviso. 
          Todos los pagos se procesan de manera segura mediante las plataformas indicadas en el sitio.
        </p>

        <h2>5. Política de devoluciones</h2>
        <p>
          Las devoluciones o cambios se aceptan únicamente si el producto presenta defectos de 
          fabricación y se notifica dentro de los 7 días posteriores a la recepción.
        </p>

        <h2>6. Propiedad intelectual</h2>
        <p>
          Todo el contenido del sitio, incluyendo imágenes, logotipos y textos, es propiedad de 
          Joyería Marley y está protegido por las leyes de propiedad intelectual.
        </p>

        <h2>7. Privacidad y protección de datos</h2>
        <p>
          Los datos personales recopilados se utilizan únicamente con fines comerciales internos 
          y no serán compartidos con terceros sin consentimiento del usuario.
        </p>

        <h2>8. Modificaciones</h2>
        <p>
          Joyería Marley se reserva el derecho de actualizar estos términos en cualquier momento. 
          Los cambios se publicarán en esta página.
        </p>

        <h2>9. Contacto</h2>
        <p>
          Si tienes dudas sobre estos Términos y Condiciones, puedes comunicarte con nosotros a través 
          de nuestro formulario de contacto o al correo <strong>soporte@joyeriamarley.com</strong>.
        </p>

        <p className="terms-footer">
          Última actualización: Noviembre 2025
        </p>
      </div>
    </div>
  );
}