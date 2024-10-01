import React from 'react';
import { Link } from 'react-router-dom';
import './blog.css';

// Importation des images
import bannerImg from '../assets/img/banner.jpg';
import coderImg from '../assets/img/blog/coder.jpg';
import croissanceImg from '../assets/img/blog/croissance.jpg';
import googleImg from '../assets/img/blog/google.jpg';
import screensImg from '../assets/img/blog/screens.jpg';
import seoImg from '../assets/img/blog/seo.jpg';
import technosImg from '../assets/img/blog/technos.png';

const Blog = () => {
  return (
    <section className="blog-section">
      <div className="header-image">
        <img src={bannerImg} alt="Background Blue" className="full-width-image" />
      </div>
      <div className="container">
        <h2>Blog</h2>
        <p>Retrouvez ici quelques articles sur le développement web.</p>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src={coderImg} className="card-img-top" alt="Coder son site en HTML/CSS" />
              <div className="card-body">
                <h3 className="card-title">Coder son site en HTML/CSS</h3>
                <p className="card-text">Apprenez les bases du codage en HTML et CSS pour débuter dans le développement web.</p>
                <Link to="#">Lire la suite</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={croissanceImg} className="card-img-top" alt="Vendre ses produits sur le web" />
              <div className="card-body">
                <h3 className="card-title">Vendre ses produits sur le web</h3>
                <p className="card-text">Découvrez les meilleures stratégies pour vendre vos produits en ligne.</p>
                <Link to="#">Lire la suite</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={googleImg} className="card-img-top" alt="Se positionner sur Google" />
              <div className="card-body">
                <h3 className="card-title">Se positionner sur Google</h3>
                <p className="card-text">Apprenez les techniques de référencement naturel pour optimiser votre site web.</p>
                <Link to="#">Lire la suite</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={screensImg} className="card-img-top" alt="Coder en responsive design" />
              <div className="card-body">
                <h3 className="card-title">Coder en responsive design</h3>
                <p className="card-text">Apprenez comment rendre votre site web responsive et adapté à tous les écrans.</p>
                <Link to="#">Lire la suite</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={seoImg} className="card-img-top" alt="Techniques de référencement" />
              <div className="card-body">
                <h3 className="card-title">Techniques de référencement</h3>
                <p className="card-text">Découvrez les techniques de SEO pour améliorer la visibilité de votre site web.</p>
                <Link to="#">Lire la suite</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={technosImg} className="card-img-top" alt="Apprendre à coder" />
              <div className="card-body">
                <h3 className="card-title">Apprendre à coder</h3>
                <p className="card-text">Découvrez les ressources pour débuter dans le développement web et apprendre à coder.</p>
                <Link to="#">Lire la suite</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
