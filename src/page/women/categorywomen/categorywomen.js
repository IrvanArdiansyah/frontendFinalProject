import React, { Component} from 'react'
import './categorywomen.css'

export default class CategoryWomen extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="container-categorywomen">
                    <div className="row categorywomen-header">
                        <h4><span role="img" aria-label="1">📦</span>SHOP BY CATEGORY!</h4>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 categorywomen-gallery">
                            <img src="../aset/img/men/categorymen/bag.png" alt="1"/>
                            <div className="categorywomen-info">
                            <h3>Bags</h3>
                            <button className="btn btn-outline-warning">Check It Out!</button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 categorywomen-gallery">
                            <img src="../aset/img/men/categorymen/glove1.png" alt="1"/>
                            <div className="categorywomen-info">
                            <h3>Gloves</h3>
                            <button className="btn btn-outline-warning">Check It Out!</button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 categorywomen-gallery">
                            <img src="../aset/img/men/categorymen/belt1.png" alt="1"/>
                            <div className="categorywomen-info">
                            <h3>Belts</h3>
                            <button className="btn btn-outline-warning">Check It Out!</button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 categorywomen-gallery">
                            <img src="../aset/img/men/categorymen/jacket.png" alt="1"/>
                            <div className="categorywomen-info">
                            <h3>Jackets</h3>
                            <button className="btn btn-outline-warning">Check It Out!</button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 categorywomen-gallery">
                            <img src="../aset/img/men/categorymen/shoes.png" alt="1"/>
                            <div className="categorywomen-info">
                            <h3>Shoes</h3>
                            <button className="btn btn-outline-warning">Check It Out!</button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 categorywomen-gallery">
                            <img src="../aset/img/men/categorymen/wallet1.png" alt="1"/>
                            <div className="categorywomen-info">
                            <h3>Wallets</h3>
                            <button className="btn btn-outline-warning">Check It Out!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}