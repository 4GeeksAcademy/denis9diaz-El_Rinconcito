import React, { useState } from "react";
import "../../styles/Menus.css";
import Navbar from "./Navbar";
import fondo from "../../img/fondo-info.png";

const Menus = () => {
    const [activeSection, setActiveSection] = useState("menu1");

    return (
        <div className="menus-div" style={{ backgroundImage: `url(${fondo})` }}>
            <Navbar />
            <div className="sections d-flex justify-content-center my-4">
                <div 
                    className={`section ${activeSection === "menu1" ? "active" : ""}`} 
                    onClick={() => setActiveSection("menu1")}
                >
                    Menú Diario
                </div>
                <div 
                    className={`section ${activeSection === "menu2" ? "active" : ""}`} 
                    onClick={() => setActiveSection("menu2")}
                >
                    Menú Especial
                </div>
            </div>
            <div className="content container">
                {activeSection === "menu1" && (
                    <div className="content-menu">
                        <h2 className="title-menu">Menú Diario</h2>
                    </div>
                )}
                {activeSection === "menu2" && (
                    <div className="content-menu">
                        <h2 className="title-menu">Menú Especial</h2>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Menus;
