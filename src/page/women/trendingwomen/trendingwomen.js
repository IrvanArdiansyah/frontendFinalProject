import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './trendingwomen.css'

export default class TrendingWomen extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-trendingwomen">
                    <div className="row trending-header">
                        <h4><span role="img" aria-label="1">🔖</span>Trending Now!</h4>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 trendingwomen-1">
                                <Link to="/trendingwomen1"><img src="../aset/img/women/trendingwomen/trending1-1.jpg" alt="1" /></Link>
                        </div>
                        <div className="col-lg-8 trendingwomen-2">
                            <Link to="/trendingwomen2"><img src="../aset/img/women/trendingwomen/trending2-1.jpg" alt="1" /></Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}