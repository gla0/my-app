import React, { Component } from 'react';
import  './App.css';

class Footer extends Component {
    render() {
        return (
          <footer className="cont" style={{height: '10%'}}>
          <br />
          <a href="MYti.html">
            <img src="homeIcon.png" className="mx-auto d-block" style={{width: '25%'}} alt="Home" />
          </a>
          <br />
        </footer>
         
        )
    }
}

export default Footer;