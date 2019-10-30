import React, { Component } from 'react';
import  './App.css';

class Section1 extends Component {
    render() {
        return (
          <section id="section1">
          <br />
          <p>Find your perfect trip, designed by insiders who know know and love their cities.
          </p>
         
          <h2>Start browsing </h2>
          <a href="city.html">
            <img src="circled-right-2.png" width={1600} height={1600} alt="Circled" />
          </a>
          </section> 
         
        )
    }
}

export default Section1;