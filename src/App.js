import React, { Component } from 'react';
import './App.css';

import Header from './header';
import Section1 from './section1';
import Section2 from './section2';
import Footer from './footer';


class App extends Component {
  
  render() {
    return (

      <div className="container-fluid">
        <Header/>
        
        <Section1/>
        <Section2/>
          
        <Footer/>
      </div>
    )
  }
}

export default App;
