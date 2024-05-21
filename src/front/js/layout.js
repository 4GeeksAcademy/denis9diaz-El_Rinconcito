import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import injectContext from "./store/appContext";

import Footer from "./component/footer";
import Home from "./pages/Home.js";
import Informacion from "./pages/Informacion.js";
import Galeria from "./pages/Galeria.js";
import Carta from "./pages/Carta.js";
import Menus from "./pages/Menus.js";
import Historia from "./pages/Historia.js";

const Layout = () => {

    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Informacion />} path="/info" />
                        <Route element={<Galeria />} path="/galeria" />
                        <Route element={<Carta />} path="/carta" />
                        <Route element={<Menus />} path="/menus" />
                        <Route element={<Historia />} path="/historia" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
