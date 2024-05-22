import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../../styles/Footer.css";

const Footer = () => (
    <footer className="footer mt-auto py-3">
        <div className="container">
            <div className="row footer-row">
                <div className="col-md-4 text-left">
                    <h5 className="footer-title">Contacto</h5>
                    <p className="footer-text"><FontAwesomeIcon icon={faMapMarkerAlt} className="me-1"/> C/ del Padre Claret, 12. Madrid</p>
                    <p className="footer-text"><FontAwesomeIcon icon={faPhone} className="me-1"/> 123456789</p>
                    <p className="footer-text"><FontAwesomeIcon icon={faEnvelope} className="me-1"/> elrinconcito@gmail.com</p>
                </div>
                <div className="col-md-4 text-left">
                    <h5 className="footer-title">Horario</h5>
                    <p className="footer-text">Domingo a Viernes: 12:00 PM - 00:00 PM</p>
                    <p className="footer-text">Sábado: 11:00 AM - 00:00 PM</p>
                </div>
                <div className="col-md-4 text-left">
                    <h5 className="footer-title">Redes Sociales</h5>
                    <ul className="list-unstyled footer-social">
                        <li><a href="#"><FontAwesomeIcon icon={faFacebook} className="footer-icon" /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faTwitter} className="footer-icon" /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faInstagram} className="footer-icon" /></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <p className="footer-text">&copy; 1981 - {new Date().getFullYear()} El Rinconcito. Todos los derechos reservados.</p>
        </div>
    </footer>
);

export default Footer;
