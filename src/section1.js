import React, { Component } from 'react';
import  './App.css';

class Section1 extends Component {
    render() {
        return (
          <section className="container" style={{height: '40%'}}>
          <br />
          <p className="text-center">Find your perfect trip, designed by insiders who know know and love their cities.
          </p>
          <br />
          <h2 className="text-center">Start browsing </h2>
          <a href="city.html">
            <img src="circled-right-2.png" className="mx-auto d-block" style={{width: '50%'}} alt="Circled" />
          </a>
          <br />
        </section> 
         
        )
    }
}

export default Section1;