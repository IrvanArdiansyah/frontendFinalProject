import React, { Component} from 'react'
import Banner from './banner/banner';
import Features from './features/features';
import Sales from './sales/sales';
import Article from './article/article';

export default class Home extends Component {
    render () {
        return (
            <React.Fragment>
                <Banner />
                <Features />
                <Sales />
                <Article />
            </React.Fragment>
        )
    }
}