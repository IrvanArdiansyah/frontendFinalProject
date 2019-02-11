import React, { Component } from 'react';
import Navbar from './komponen/navbar/navbar';
import Routes from './routes/routes';
import Footer from './komponen/footer/footer';

import './App.css';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Routes />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
