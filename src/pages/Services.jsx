import React from 'react';
import './Services.css';


const Services = () => {
  return (
    <section className="services-section">
       <div className="header-image">
        <img src="/src/assets/img/banner.jpg" alt="Background Blue" className="full-width-image" />
      </div>
      <div className="container">
        <h2>Mon Offre de Services</h2>
        <p>Voici les prestations sur lesquelles je peux intervenir.</p>
        <div className="row">
          <div className="col-md-4">
            <h3>UX Design</h3>
            <p>UX Design est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.</p>
          </div>
          <div className="col-md-4">
            <h3>Développement Web</h3>
            <p>Le développement de sites web repose sur l'utilisation des langages HTML, CSS, JavaScript et PHP.</p>
          </div>
          <div className="col-md-4">
            <h3>Référencement</h3>
            <p>Le référencement naturel d'un site, aussi appelé SEO, consiste à améliorer sa position dans les résultats des moteurs de recherche.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
