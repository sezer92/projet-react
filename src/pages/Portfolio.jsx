import React from 'react';
import './Portfolio.css';

// Importation des images
import bannerImg from '../assets/img/banner.jpg';
import freshFoodImg from '../assets/img/portfolio/fresh-food.jpg';
import restaurantJapImg from '../assets/img/portfolio/restaurant-japonais.jpg';
import espaceBienEtreImg from '../assets/img/portfolio/espace-bien-etre.jpg';

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <div className="header-image">
      <img src={bannerImg} alt="Background Blue" className="full-width-image" />
      </div>
      <div className="container">
        <h2>Portfolio</h2>
        <p>Voici quelques-unes de mes réalisations.</p>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="img-container">
                <img src={freshFoodImg} className='img-fresh card-img-top' alt='Fresh Food' />
              </div>
              <div className="card-body">
                <h3 className="card-title">Fresh Food</h3>
                <p className="card-text">Réalisation d'un site avec commande en ligne.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="img-container">
                <img src={restaurantJapImg} className='img-jap card-img-top' alt='Restaurant Akira' />
              </div>
              <div className="card-body">
                <h3 className="card-title">Restaurant Akira</h3>
                <p className="card-text">Réalisation d'un site vitrine.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="img-container">
                <img src={espaceBienEtreImg} className='img-bien card-img-top' alt='Espace bien-être' />
              </div>
              <div className="card-body">
                <h3 className="card-title">Espace bien-être</h3>
                <p className="card-text">Réalisation d'un site vitrine pour un praticien de bien-être.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
