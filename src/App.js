import React, { Component } from 'react';
import Navbar from './komponen/navbar';
import Banner from './komponen/banner';
import Features from './komponen/features';
import Sales from './komponen/sales';
import Article from './komponen/article';
import Footer from './komponen/footer';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Banner />
        <Features />
        <Sales />
        <Article />
        <Footer />
      </div>
    );
  }
}

export default App;
