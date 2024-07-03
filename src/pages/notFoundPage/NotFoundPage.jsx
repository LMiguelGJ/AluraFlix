import React, { useEffect } from 'react';
import './NotFoundPage.css';
import astronaut from '../../assets/astronaut.svg'
import planet from '../../assets/planet.svg'

const NotFoundPage = () => {
  useEffect(() => {
    // Google tag (gtag.js)
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-1752YPLP7H';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-1752YPLP7H');
    };

    // tsParticles script
    const tsParticlesScript = document.createElement('script');
    tsParticlesScript.src = 'https://cdn.jsdelivr.net/npm/tsparticles@2/tsparticles.bundle.min.js';
    tsParticlesScript.type = 'text/javascript';
    tsParticlesScript.async = true;
    document.body.appendChild(tsParticlesScript);

    // Custom script for 404
    const customScript = document.createElement('script');
    customScript.src = '../../utils/404.js';
    customScript.type = 'text/javascript';
    customScript.async = true;
    document.body.appendChild(customScript);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(tsParticlesScript);
      document.body.removeChild(customScript);
    };
  }, []);

  const path = window.location.pathname.replace('/', '')

  return (
    <>

    <div className="container__NotFoundPage">
    <div className="permission_denied">
      <div id="tsparticles"></div>
      <div className="denied__wrapper">
        <h1>404</h1>
        <h3>
          LOST IN <span>{path}</span>AluraFix? Hmm, parece que esa página no existe.
        </h3>
        <img id="astronaut" src={astronaut} alt="Astronaut" /> 
        <img id="planet" src={planet} alt="Planet" />
        <a href="/"><button className="denied__link">Go Home</button></a>
      </div>
    </div>
    </div>


    </>
  );
};

export default NotFoundPage;
