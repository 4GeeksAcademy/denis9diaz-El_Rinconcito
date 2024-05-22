import React from "react";
import "../../styles/Informacion.css";
import Navbar from "./Navbar";
import fondo from "../../img/fondo-info.png";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope, faCalendar } from "@fortawesome/free-solid-svg-icons";

const Informacion = () => {
    const location = { lat: 40.44803787143906, lng: -3.6641168741304644 };

    const abrirEnGoogleMaps = () => {
        const url = ("https://www.google.com/maps/place/El+Rinconcito/@40.4480789,-3.6667196,16z/data=!3m1!4b1!4m6!3m5!1s0xd4228d311ece89f:0x67d3c453dfa2a96a!8m2!3d40.4480748!4d-3.6641447!16s%2Fg%2F1tfqs7ds?entry=ttu")
        window.open(url, '_blank');
    };

    return (
        <div className="informacion-div" style={{ backgroundImage: `url(${fondo})` }}>
            <Navbar />
            <div className="informacion">
                <div className="row">
                    <div className="col-md-4 div1">
                        <div className="informacion-item">
                            <h2>Horario</h2>
                            <p className="info-text"><FontAwesomeIcon icon={faCalendar} className="me-1" /> Domingo a Viernes: 12:00 - 00:00</p>
                            <p className="info-text"><FontAwesomeIcon icon={faCalendar} className="me-1" /> Sábado: 11:00 - 01:00</p>
                            <p className="info-text"><FontAwesomeIcon icon={faCalendar} className="me-1" /> Lunes: Cerrado</p>
                        </div>
                    </div>
                    <div className="col-md-4 div2">
                        <div className="informacion-item direccion">
                            <h2>Dirección</h2>
                            <p className="info-text"><FontAwesomeIcon icon={faMapMarkerAlt} className="me-1" /> C/ del Padre Claret, 12. Madrid</p>
                            <LoadScript googleMapsApiKey={process.env.API_KEY_GOOGLE} loadingElement={<div>Loading...</div>} libraries={["places"]} >
                                <GoogleMap
                                    mapContainerStyle={{ width: '80%', height: '300px', borderRadius: '10px', border: '3px solid whitesmoke' }}
                                    center={location}
                                    zoom={12}
                                >
                                    <Marker position={location} />
                                </GoogleMap>
                            </LoadScript>
                            <button onClick={abrirEnGoogleMaps} className="btn btn-outline-light mt-3">Abrir en Google Maps</button>
                        </div>
                    </div>
                    <div className="col-md-4 div3">
                        <div className="informacion-item">
                            <h2>Contacto</h2>
                            <p className="info-text"><FontAwesomeIcon icon={faPhone} className="me-1" /> 123456789</p>
                            <p className="info-text"><FontAwesomeIcon icon={faEnvelope} className="me-1" /> elrinconcito@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Informacion;
