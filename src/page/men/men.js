import React, { Component } from 'react'
import BannerMen from './bannermen/bannermen'
import TrendingMen from './trendingmen/trendingmen'
import CategoryMen from './categorymen/categorymen'

class Men extends Component {
    render () {
        return (
            <React.Fragment>
                <BannerMen />
                <TrendingMen />
                <CategoryMen />
            </React.Fragment>
        )
    }
}

export default Men;