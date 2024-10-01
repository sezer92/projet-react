import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <h2>Me Contacter</h2>
        <div className="row">
          <div className="col-md-6">
            <form>
              <div className="form-group">
                <label>Nom</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea className="form-control" rows="5"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Envoyer</button>
            </form>
          </div>
          <div className="col-md-6">
            <h3>Mes coordonnées</h3>
            <p>40 Rue Laure Diebold, 69009 Lyon, France</p>
            <p>Téléphone : 06 20 30 40 50</p>
            <p>Email : john.doe@gmail.com</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.178911447585!2d4.810232415745957!3d45.77179911999778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c1b9bf8e872d%3A0x4f631f660bbabb1d!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1667211794713!5m2!1sfr!2sfr"
              width="100%"
              height="200"
              allowFullScreen=""
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

