import React from 'react';
//Router
import { Routes, Route } from "react-router-dom";
//Routes-Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import FicheLogement from "./pages/FicheLogement/FicheLogement";
import Error from "./pages/Error/Error";
//Routes-Composants
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div className='body_container'>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/logement/:id" element={<FicheLogement />} />
                    <Route path="*" element={<Error/>} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default App;