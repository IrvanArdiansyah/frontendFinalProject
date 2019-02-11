import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import './menbags.css'
import axios from 'axios'
import ShoppingCard from './komponen/shoppingcard';

export default class Menbags extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Menbags: []
        }
    }
    componentDidMount() {
        let url = 'http://localhost:3320/menbags'
        axios.get(url)
            .then((info) => {
                console.log(info.data)
                this.setState({
                    Menbags: info.data
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() { 
        return (
            <React.Fragment>
                <div className="container-category">
                    <div className="row">
                        <div className="col-md-2">
                            <p></p>
                            <p>lorem</p>
                            <p>lorem</p>
                            <p>lorem</p>
                            <p>lorem</p>
                        </div>
                        <div className="col-md-10">
                            <ShoppingCard menBags={this.state.Menbags}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
} 