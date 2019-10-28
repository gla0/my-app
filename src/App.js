import React from 'react';
import './App.css';
import header from './header'


class App extends Component {
  return (
    <div className="App">

var NewComponent = React.createClass({
  render: function() {
    return (

      <div className="container-fluid">
        <header/>
        
        <section className="container" style={{height: '40%'}}>
          <br />
          <p className="text-center">Find your perfect trip, designed by insiders who know know and love their cities.
          </p>
          <br />i
          <h2 className="text-center">Start browsing </h2>
          <a href="#">
            <img src="circled-right-2.png" className="mx-auto d-block" style={{width: '50%'}} alt="Circled" />
          </a>
          <br />
        </section>
        <section className="container" style={{height: '20%'}}>
          <br />
          <p className="text-center">Want to build your own MYtinerary?</p>
          <div className="row">
            <div className="col-6" align="center"><a href="#">Log in</a></div>
            <div className="col-6" align="center"><a href="#">Create Account</a></div>
          </div>
          <br />
        </section>
        <footer className="container" style={{height: '10%'}}>
          <br />
          <a href="#">
            <img src="homeIcon.png" className="mx-auto d-block" style={{width: '25%'}} alt="Home" />
          </a>
          <br />
        </footer>
      </div>
    );
  }
});

    </div>
  );
}

export default App;
