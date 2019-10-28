import React, { Component } from 'react';
import  './App.css';

class Section2 extends Component {
    render() {
        return (
          <section className="container" style={{height: '20%'}}>
           <br />
          <p className="text-center">Want to build your own MYtinerary?</p>
          <div className="row">
            <div className="col-6" align="center"><a href="login.html">Log in</a></div>
            <div className="col-6" align="center"><a href="account.html">Create Account</a></div>
          </div>
          <br />
        </section>
        )
    }
}

export default Section2;