import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import './menbelts.css'
import axios from 'axios'
import ShoppingCard from './komponen/shoppingcard';

export default class Menbelts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Menwallets: []
        }
    }
    componentDidMount() {
        let url = 'http://localhost:3320/menbelts'
        axios.get(url)
            .then((info) => {
                // console.log(info.data)
                this.setState({
                    Menwallets: info.data
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() { 
        // console.log(Menwallets)
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
                            <ShoppingCard prods={this.state.Menwallets}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
} 