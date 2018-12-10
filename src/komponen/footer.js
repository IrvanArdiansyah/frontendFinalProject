import React, { Component } from 'react';
import './../style/footer.css';


class Footer extends Component {
  render() {
    return (
        <footer id="footer">
        <div className="container-fluid parallax">
            <div className="row">
                <div className="col-lg-4">
                    <h1>ARSENIC</h1>
                    <p>Sebagai Pusat Leather Goods, kami menciptakan kemungkinan-kemungkinan gaya tanpa batas dengan
                        cara memperluas jangkauan produk lokal dambaan yang orisinil.
                        Kami menjadikan Anda sebagai pusatnya. Bersama ARSENIC, You Own Now.</p>
                </div>
                <div className="col-lg-4">
                    <div></div>
                </div>
                <div className="col-lg-4">
                    <div className="row">
                        <div className="col-lg-6 col-sm-6">
                            <h4>QUESTION</h4>
                            <ul>
                                <li><a href="1">Help</a></li>
                                <li><a href="1">How to Order</a></li>
                                <li><a href="1">Confirm Payment</a></li>
                                <li><a href="1">Help</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                            <h4>INFORMATION</h4>
                            <ul>
                                <li><a href="1">Company</a></li>
                                <li><a href="1">Event</a></li>
                                <li><a href="1">Contact</a></li>
                                <li><a href="1">Career</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <h5>Follow Us!</h5>
                    <a href="1"><i className="fab fa-facebook-square"></i></a>
                    <a href="1"><i className="fab fa-instagram"></i></a>
                    <a href="1"><i className="fab fa-twitter"></i></a>
                    <a href="1"><i className="fab fa-youtube"></i></a>
                </div>
            </div>
        </div>
    </footer>
    );
  }
}

export default Footer;

