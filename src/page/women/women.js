import React, { Component } from 'react'
import BannerWomen from './bannerwomen/bannerwomen'
import TrendingWomen from './trendingwomen/trendingwomen'
import CategoryWomen from './categorywomen/categorywomen'

export default class Women extends Component {
    render () {
        return (
            <React.Fragment>
                <BannerWomen />
                <TrendingWomen />
                <CategoryWomen />
            </React.Fragment>
        )
    }
}