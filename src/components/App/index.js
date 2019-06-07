import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css'

//components
import Header from '../Header';
import SideBar from '../SideBar';

//pages
import Home from '../Home';
import Deportes from '../Deportes';
import Politica from '../Politica';
import Espectaculos from '../Espectaculos';
import Tecnologia from '../Tecnologia';
import Internacionales from '../Internacionales';

function App(){
  return (
        <Router>
          <div className="App">
            <Header />
            <div className="container">
              <SideBar />
              <Route exact path="/" component={ Home }/>
              <Route path="/deportes" component={ Deportes }/>
              <Route path="/espectaculos" component={ Espectaculos }/>
              <Route path="/tecnologia" component={ Tecnologia }/>
              <Route path="/politica" component={ Politica }/>
              <Route path="/internacionales" component={ Internacionales }/>
            </div>
          </div>
        </Router>
      );
}

export default App;