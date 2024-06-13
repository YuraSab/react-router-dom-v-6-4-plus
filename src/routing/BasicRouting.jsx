import React from 'react';
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Contacts from "../components/Contacts";


const BasicRouting = () => {
    return (
        <div>
            <BrowserRouter>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contacts />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default BasicRouting;