import React from "react";
import "../../styles/Principal.css";
import Navbar from "./Navbar";
import video from "../../videos/video-fondo.mp4";

const Principal = () => {
    return (
        <div className="principal-section">
            <video autoPlay loop muted className="background-video">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <Navbar />
            <div className="content-principal">
                <h1 className="title-div">El Rinconcito</h1>
                <h3 className="subtitle-div">Marisquería en Madrid</h3>
            </div>
        </div>
    );
}

export default Principal;
