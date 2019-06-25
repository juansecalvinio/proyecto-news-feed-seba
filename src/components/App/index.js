import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './index.css'

//components
import Header from '../Header';
import SideBar from '../SideBar';

//pages
import Home from './../pages/Home';
import Deportes from './../pages/Deportes';
import Politica from './../pages/Politica';
import Espectaculos from './../pages/Espectaculos';
import Tecnologia from './../pages/Tecnologia';
import Internacionales from './../pages/Internacionales';
import Search from './../pages/Search';

class App extends Component{
  constructor(){
    super()
  }

  render(){
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
            <Route path="/search/:key" component={ Search }/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;