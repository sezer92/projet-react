import React from 'react';
import './accueil.css'; 
import JohnDoeAbout from '../assets/img/john-doe-about.jpg'; // Assurez-vous que l'image est bien dans ce dossier

const Accueil = () => {
  return (
    <section className="accueil-section">
      {/* Section avec l'image de fond */}
      <div className="hero-section">
        <div className="overlay">
          <div className="container accueil-content">
            <h1>Bonjour, je suis John Doe</h1>
            <h2>Développeur Web Full Stack</h2>
            <a href="#about" className="btn btn-primary">En savoir plus</a>
          </div>
        </div>
      </div>

      {/* Section À propos */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={JohnDoeAbout} className='about-image img-fluid' alt='John Doe' />
            </div>
            <div className="col-md-6">
              <h3>À propos</h3>
              <p>
                Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation de développeur web.
                J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.
              </p>
              <h3>Mes Compétences</h3>
              <div className="progress mb-3">
                <div className="progress-bar bg-success" role="progressbar" style={{ width: '90%' }}>HTML5 - 90%</div>
              </div>
              <div className="progress mb-3">
                <div className="progress-bar bg-info" role="progressbar" style={{ width: '80%' }}>CSS3 - 80%</div>
              </div>
              <div className="progress mb-3">
                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '70%' }}>JavaScript - 70%</div>
              </div>
              <div className="progress mb-3">
                <div className="progress-bar bg-danger" role="progressbar" style={{ width: '50%' }}>React - 50%</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Accueil;
