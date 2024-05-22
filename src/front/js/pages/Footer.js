import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../../styles/Footer.css";

const Footer = () => (
    <footer className="footer mt-auto py-3">
        <div className="container">
            <div className="row footer-row">
                <div className="col-md-4 text-left">
                    <h5 className="footer-title">Contacto</h5>
                    <p className="footer-text"><FontAwesomeIcon icon={faMapMarkerAlt} className="me-1" /> C/ del Padre Claret, 12. Madrid</p>
                    <p className="footer-text"><FontAwesomeIcon icon={faPhone} className="me-1" /> 91 416 30 24</p>
                    <p className="footer-text"><FontAwesomeIcon icon={faEnvelope} className="me-1" /> elrinconcitoarzapua@gmail.com</p>
                </div>
                <div className="col-md-4 text-left">
                    <h5 className="footer-title">Horario</h5>
                    <p className="footer-text"><FontAwesomeIcon icon={faCalendar} className="me-1" /> Martes a Sábado: 13:30 - 16:30 | 20.30 - 23:30</p>
                    <p className="footer-text"><FontAwesomeIcon icon={faCalendar} className="me-1" /> Domingo: 12:00 - 17:00</p>
                    <p className="footer-text"><FontAwesomeIcon icon={faCalendar} className="me-1" /> Lunes: Cerrado</p>
                </div>
                <div className="col-md-4 text-left">
                    <h5 className="footer-title">Redes Sociales</h5>
                    <ul className="list-unstyled footer-social">
                        <li><a href="https://www.facebook.com/Rest.ElRinconcito/?locale=es_ES"><FontAwesomeIcon icon={faFacebook} className="footer-icon" /></a></li>
                        <li><a href="https://www.instagram.com/restaurante_elrinconcito/?hl=es"><FontAwesomeIcon icon={faInstagram} className="footer-icon" /></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <p className="footer-text">&copy; 1968 - {new Date().getFullYear()} El Rinconcito. Todos los derechos reservados.</p>
        </div>
    </footer>
);

export default Footer;
