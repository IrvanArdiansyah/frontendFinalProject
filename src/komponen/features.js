import React, { Component } from 'react';
import './../style/features.css';


class Features extends Component {
    render() {
        return (
            <section id="arsenicChoice">
                <div className="container">
                    <div className="row arsenicHeader">
                        <div className="container">
                            <h4>Arsenic Choice!</h4>
                            <p>Find what you need from our choice!</p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row pt-3">
                            <div className="col-lg-4 cardArChoice">
                                <img src="../aset/img/Features/features_1.jpg" alt="features1" />
                                <div className="choiceInfo">
                                    <h3>Arsenic Choice</h3>
                                    <p>Watch Strap by Voyej</p>
                                    <button className="btn btn-outline-warning">Check it out!</button>
                                </div>
                            </div>
                            <div className="col-lg-4 cardArChoice">
                                <img src="../aset/img/Features/features_2.jpg" alt="features2" />
                                <div className="choiceInfo">
                                    <h3>Arsenic Choice</h3>
                                    <p>Sling Bag by Ltrkrft</p>
                                    <button className="btn btn-outline-warning">Check it out!</button>
                                </div>
                            </div>
                            <div className="col-lg-4 cardArChoice">
                                <img src="../aset/img/Features/features_3.jpg" alt="features3" />
                                <div className="choiceInfo">
                                    <h3>Arsenic Choice</h3>
                                    <p>Long Wallet by Zedval</p>
                                    <button className="btn btn-outline-warning">Check it out!</button>
                                </div>
                            </div>
                            <div className="col-lg-4 cardArChoice">
                                <img src="../aset/img/Features/features_4.jpg" alt="features1" />
                                <div className="choiceInfo">
                                    <h3>Arsenic Choice</h3>
                                    <p>Boot by GutenInc</p>
                                    <button className="btn btn-outline-warning">Check it out!</button>
                                </div>
                            </div>
                            <div className="col-lg-4 cardArChoice">
                                <img src="../aset/img/Features/features_5.jpg" alt="features2" />
                                <div className="choiceInfo">
                                    <h3>Arsenic Choice</h3>
                                    <p>Wallet by Voyej</p>
                                    <button className="btn btn-outline-warning">Check it out!</button>
                                </div>
                            </div>
                            <div className="col-lg-4 cardArChoice">
                                <img src="../aset/img/Features/features_6.jpg" alt="features3" />
                                <div className="choiceInfo">
                                    <h3>Arsenic Choice</h3>
                                    <p>Belt by Raku Esentials</p>
                                    <button className="btn btn-outline-warning">Check it out!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </section>
                );
              }
            }
            
export default Features;