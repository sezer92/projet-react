import React from 'react';
import './MentionsLegales.css';


const MentionsLegales = () => {
  return (
    <section className="mentions-legales-section">
      <div className="container">
        <h2>Mentions Légales</h2>
        <div className="accordion" id="mentionsAccordion">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h5 className="mb-0">
                <button
                  className="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Éditeur du site
                </button>
              </h5>
            </div>
            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#mentionsAccordion"
            >
              <div className="card-body">
                John Doe, 40 Rue Laure Diebold, 69009 Lyon, France. Téléphone : 06 20 30 40 50. Email : john.doe@gmail.com
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Hébergeur
                </button>
              </h5>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#mentionsAccordion"
            >
              <div className="card-body">
                Always Data, 91 rue du Faubourg Saint Honoré, 75008 Paris. www.alwaysdata.com
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingThree">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Crédits
                </button>
              </h5>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#mentionsAccordion"
            >
              <div className="card-body">
                Ce site a été développé par John Doe, étudiant au CEF. Les images sont issues du site Pixabay.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentionsLegales;

