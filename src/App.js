import React, {useEffect, useState} from 'react';
import './styles/App.css';
import {BrowserRouter} from "react-router-dom";
import Navbars from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";


function App() {

    return (
            <BrowserRouter>
                <Navbars/>
                <AppRouter/>
            </BrowserRouter>       
    )
}

export default App;
