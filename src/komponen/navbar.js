import React, { Component } from 'react';

import './../style/navbar.css';


class Navbar extends Component {
  render() {
    return (
        <header>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <a className="navbar-brand py-2" href="1">
                <img id="brand" src="../aset/img/Logo/arsenic_main.png" width="80" height="80" className="d-inline-block align-top" alt="logo" />
            </a>
            <div className="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item px-3">
                        <a className="nav-link" href="1">MEN</a>
                    </li>
                    <li className="nav-item px-3">
                        <a className="nav-link" href="1">WOMEN</a>
                    </li>
                    <li className="nav-item px-3">
                        <a className="nav-link" href="1">ACCESSORIES</a>
                    </li>
                    <li className="nav-item px-3">
                        <a className="nav-link" href="1">BRANDS</a>
                    </li>
                    <li className="nav-item px-3">
                        <a className="nav-link" href="1">rsnc Letter</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-warning my-2 my-sm-0" type="submit"><i className="fas fa-search"></i></button>
                </form>
            </div>
        </nav>
    </header>
    );
  }
}

export default Navbar;