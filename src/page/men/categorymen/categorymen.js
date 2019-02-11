import React, { Component} from 'react'
import './categorymen.css'
import { Link } from 'react-router-dom'

export default class CategoryMen extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="container-categorymen">
                    <div className="row categorymen-header">
                        <h4><span role="img" aria-label="1">📦</span>SHOP BY CATEGORY!</h4>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 categorymen-gallery">
                            <img src="../aset/img/men/categorymen/wallet1.png" alt="1"/>
                            <div className="categorymen-info">
                            <h3>Wallets</h3>
                            <Link to="/Men/Wallets"><button className="btn btn-outline-warning">Check It Out!</button></Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 categorymen-gallery">
                            <img src="../aset/img/men/categorymen/belt1.png" alt="1"/>
                            <div className="categorymen-info">
                            <h3>Belts</h3>
                            <Link to="/Men/Belts"><button className="btn btn-outline-warning">Check It Out!</button></Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 categorymen-gallery">
                            <img src="../aset/img/men/categorymen/bag.png" alt="1"/>
                            <div className="categorymen-info">
                            <h3>Bags</h3>
                            <Link to="/Men/Bags"><button className="btn btn-outline-warning">Check It Out!</button></Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 categorymen-gallery">
                            <img src="../aset/img/men/categorymen/shoes.png" alt="1"/>
                            <div className="categorymen-info">
                            <h3>Shoes</h3>
                            <button className="btn btn-outline-warning">Check It Out!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}