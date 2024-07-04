import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Background from './components/bg';
import CreateNavBar from './components/nav';
import CreateSlider from './components/slider';
import CreateCardGroup from './components/cards';
import LiveCount from './components/posts';
import icon from './assets/img/icon.svg';
import reicon from './assets/img/react-icon.svg';
import boicon from './assets/img/bootstrap-icon.svg';
import css from './assets/img/css-icon.svg';
import deicon from './assets/img/django-icon.svg'
import './index.css';
import './assets/css/nav.css';
import './assets/css/btn.css'
import './assets/css/more.css';
import'./assets/css/scroll.css';
import'./assets/css/final.css';

const App = () => (
  <React.Fragment>
    <section className={`bg-all ${Background()}`}>
      <CreateNavBar />
      <section className="presentation" id="presentation">
        <div className="info">
          <div className="info-text">
            <h1>¿Quién soy?</h1>
            <p>
              Soy un artista digital apasionado por diversos movimientos artísticos, que a menudo inspiran mis dibujos. Además, la música es una gran influencia en mi trabajo, por lo que suelo acompañar mis publicaciones con canciones que complementan mis creaciones.
            </p>
          </div>
          <a type="button" className="btn btn-outline-info" id="trabajos-btn" href="#more-bg1">Más</a>
        </div>
        <CreateSlider />
      </section>

      <section className="more" id={`more-${Background()}`}>
        <div className={`info-all info-more-${Background()}`}>
          <div className="info-text-more">
            <h1 id='glow'><LiveCount/> ILUSTRACIONES</h1>
            <h2>
              Actualmente llevo más de 100 ilustraciones, algunas mejores que otras. Aquí algunas de mis favoritas:
            </h2>
          </div>
        </div>
        <CreateCardGroup />
      </section>

      <div className="modal fade extra" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
              <button type="button" className="btn-close close-final" data-bs-dismiss="modal" aria-label="Close"></button>
            <div className="modal-body modal-final">

            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='final'>
      <h1>Además</h1>
      <p>
        Me interesa el desarrollo web, por eso fui yo quien desarrolló esta pequeña landing page utilizando React, Bootstrap, CSS y Django, no es mucho pero es trabajo honesto.
      </p>
      <div className='final-images'>
        <a className="icon" href="https://es.react.dev/" target="_blank"><img src={reicon} width="120px" height="140px" alt="Logo" /></a>
        <a className="icon" href="https://getbootstrap.com/" target="_blank"><img src={boicon} width="120px" height="140px" alt="Logo" /></a>
      </div>
      <div className='final-images'>
        <a className="icon" href="https://www.w3.org/Style/CSS/" target="_blank"><img src={css} width="120px" height="140px" alt="Logo" /></a>
        <a className="icon" href="https://www.djangoproject.com/" target="_blank"><img src={deicon} width="180px" height="180px" alt="Logo" /></a>
      </div>
    </section>

    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-body-secondary">© 2024 Leallicna</p>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3"><a className="text-body-secondary" href="https://www.instagram.com/leallicna/" target="_blank"><img src={icon} width="25px" id="footer-img" alt="Icon" /></a></li>
        </ul>
      </footer>
    </div>
  </React.Fragment>
);

ReactDOM.render(<App />, document.getElementById('root'));





