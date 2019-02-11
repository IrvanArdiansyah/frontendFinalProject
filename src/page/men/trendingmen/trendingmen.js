import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './trendingmen.css'

export default class TrendingMen extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-trendingmen">
                    <div className="row trending-header">
                        <h4><span role="img" aria-label="1">🔖</span>Trending Now!</h4>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 trendingmen-1">
                                <Link to="/trendingmen1"><img src="../aset/img/men/trendingmen/trending5-1.jpg" alt="1" /></Link>
                        </div>
                        <div className="col-lg-8 trendingmen-2">
                            <Link to="/trendingme2"><img src="../aset/img/men/trendingmen/trending4-1.jpg" alt="1" /></Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
