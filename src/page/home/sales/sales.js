import React, { Component } from 'react';
import './sales.css';


class Sales extends Component {
  render() {
    return (
        <section id="arsenicSales">
        <div className="container">
            <div className="row arsenicHeader">
                <div className="container">
                    <h4>SALES!</h4>
                    <p>Discount up to 70%! Come and see our sales!</p>
                </div>
            </div>
            <div className="row pt-3">
                <div className="col-lg-4 cardArSale">
                    <img src="../aset/img/home/sales/sale_1.jpg" alt="sales"/>
                    <div className="saleInfo">
                        <h3 className="display-4">SALE! 30%</h3>
                        <button className="btn btn-outline-danger">Check it out!</button>
                    </div>
                </div>
                <div className="col-lg-4 cardArSale">
                    <img src="../aset/img/home/sales/sale_2.jpg" alt="sales2"/>
                    <div className="saleInfo">
                        <h3 className="display-4">SALE! 70%</h3>
                        <button className="btn btn-outline-danger">Check it out!</button>
                    </div>
                </div>
                <div className="col-lg-4 cardArSale">
                    <img src="../aset/img/home/sales/sale_3.jpg" alt="sales3"/>
                    <div className="saleInfo">
                        <h3 className="display-4">SALE! 10%</h3>
                        <button className="btn btn-outline-danger">Check it out!</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
  }
}

export default Sales;