import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';


class Navbar extends Component {
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
                        <div className="col-lg-5">
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
                                {/* <li className="nav-item px-1">
                        <a className="nav-link" href="1">BRANDS</a>
                    </li> */}
                                <li className="nav-item px-1">
                                    <a className="nav-link" href="1">rsnc Letter</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control-cst mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn-cst btn-outline-arsenic my-2 my-sm-0" type="submit"><i className="fas fa-search"></i></button>
                            </form>
                        </div>
                        <div className="col-lg-3">
                            <ul className="navbar-nav">
                                <li className="nav-item mx-2 nav-link pointer" data-toggle="modal" data-target="#cart">
                                    <span role="img" aria-label="1">🛒</span>Cart
                                </li>
                                <li className="nav-item mx-2">
                                    <Link className="nav-link" to="/Register"><span role="img" aria-label="1">📝</span>Register</Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link className="nav-link" to="/Login"><span role="img" aria-label="1">🔑</span>Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div id="cart" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5><span role="img" aria-label="1">🛒</span>Cart</h5>
                                <button type="button" className="close" data-dismiss="modal"> &times;</button>
                            </div>
                            <div className="modal-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Item</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Quantity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button className="btn btn-success">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Navbar;