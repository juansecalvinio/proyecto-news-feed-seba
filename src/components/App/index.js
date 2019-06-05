import React from 'react';
import './App.css'

//components
import Header from '../Header';
import SideBar from '../SideBar';
import ContentWrapper from '../ContentWrapper';
import Home from '../Home';

function App(){
  return (
        <div className="App">
          <Header />
          <div className="container">
            <SideBar />
            
            <Home></Home>
          </div>
        </div>
      );
}

export default App;