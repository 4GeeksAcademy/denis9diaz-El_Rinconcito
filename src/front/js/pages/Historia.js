import React from "react";
import "../../styles/Historia.css";
import Navbar from "./Navbar";
import fondo from "../../img/fondo-info.png";

const Historia = () => {
    return(
        <div className="historia-div" style={{ backgroundImage: `url(${fondo})` }}>
            <Navbar />
            <p className="contenido-historia">En el rinconcito somos unos auténticos máquinas</p>
        </div>
    )
}

export default Historia
