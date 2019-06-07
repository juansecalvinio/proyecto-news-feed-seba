import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import SideBarWrapper from './styled';

const SideBar = () => {
    return(
            <SideBarWrapper>
                <Link to="/">Home</Link>
                <Link to="/politica">Politica</Link>
                <Link to="/internacionales">Internacionales</Link>
                <Link to="/tecnologia">Tecnologia</Link>
                <Link to="/espectaculos">Espectaculos</Link>
                <Link to="/deportes">Deportes</Link>
            </SideBarWrapper>
    )
}

export default SideBar;