import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import axios from 'axios'


class Navbar extends Component {

    state = {
        cartItems: ''
    }

    componentWillUpdate() {
        let url = `http://localhost:3320/cartitem/${localStorage.getItem('User') ? JSON.parse(localStorage.getItem('User')).user_id : this.state.userid}`
        axios.get(url)
            .then((info) => {
                console.log(info.data.length)
                this.setState({
                    cartItems: info.data.length
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    Logout() {
        localStorage.removeItem('User')
        window.location.href('/')
    }

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-xl navbar-light fixed-top">
                    <Link className="navbar-brand py-2" to="/">
                        <img id="brand" src="../aset/img/komponen/navbar/arsenic_main.png" width="50" height="50" className="d-inline-block align-top" alt="logo" />
                    </Link>
                    <div className="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler"></span>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="col-lg-4">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item px-1">
                                    <Link className="nav-link" to="/Men">MEN</Link>
                                </li>
                                <li className="nav-item px-1">
                                    <Link className="nav-link" to="/Women">WOMEN</Link>
                                </li>
                                <li className="nav-item px-1">
                                    <a className="nav-link" href="1">ACCESSORIES</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control-cst mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn-cst btn-outline-arsenic my-2 my-sm-0" type="submit"><i className="fas fa-search"></i></button>
                            </form>
                        </div>
                        <div className="col-lg-4 kanan">
                            <ul className="navbar-nav">
                                <li className="nav-item mx-2">
                                    <Link className="nav-link" to="/Cart"><span role="img" aria-label="1">🛒</span><span class="badge">{this.state.cartItems}</span>Cart</Link>
                                </li>
                                <li className="nav-item mx-2">
                                    {
                                        localStorage.getItem('User') ? '' :
                                            <Link className="nav-link" to="/Register"><span role="img" aria-label="1">📝</span>Register</Link>
                                    }
                                </li>
                                <li className="nav-item mx-2">
                                    {
                                        localStorage.getItem('User') ?
                                            <div className="nav-link dropdown">Hi, {JSON.parse(localStorage.getItem('User')).first_name}!
                                                <div className="btn dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></div>
                                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-left" aria-labelledby="dropdownMenuLink">
                                                    <Link className="dropdown-item" to="/">Profil</Link>
                                                    <div className="dropdown-divider"></div>
                                                    <Link className="dropdown-item" to="/" onClick={this.Logout}>Log Out</Link>
                                                </div>
                                            </div>
                                            :
                                            <Link className="nav-link" to="/Login"><span role="img" aria-label="1">🔑</span>Login</Link>
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Navbar;