import React, { Component } from 'react';
import axios from 'axios'
import './cart.css'
import { Link } from 'react-router-dom'
import SweetAlert from 'sweetalert2-react'

export default class Cart extends Component {
    constructor() {
        super()
        this.state = {
            userid: '',
            cartItem: [],
            cartCoba: {},
            show: false,
            message: ''
        }
    }

    componentDidMount() {
        let url = `http://localhost:3320/cartitem/${localStorage.getItem('User') ? JSON.parse(localStorage.getItem('User')).user_id : this.state.userid}`
        axios.get(url)
            .then((info) => {
                this.setState({
                    cartItem: info.data,
                    cartCoba: info.data[0]
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        console.log(this.state.cartCoba)
        let total = this.state.cartItem.reduce(function (r, a) {
            return r + a.total_price;
        }, 0);
        localStorage.setItem('TotalPrice', (total))

        let cart = this.state.cartItem.map((val, i) => {
            let idcart = val.cart_id
            let idproduct = val.product_id
            let img = val.product_img1
            let name = val.product_name
            let quantity = val.quantity
            let price = val.price
            let subtotal = val.total_price

            return (
                <tr key={i}>
                    <td><img src={img} alt={i} style={{ width: '35px', height: '35px' }} /></td>
                    <td><center>{name}</center></td>
                    <td><center>{quantity}</center></td>
                    <td><center>Rp.{price.toLocaleString()}</center></td>
                    <td><center>Rp.{subtotal.toLocaleString()}</center></td>
                    <td><center><button className="btn btn-danger" onClick={() => {
                        let url = `http://localhost:3320/deletefromcart/${JSON.parse(localStorage.getItem('User')).user_id}/${idproduct}/${idcart}`
                        axios.delete(url)
                            .then((info) => {
                                console.log(info)
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                        window.location.href = "/Cart"
                    }}>Remove</button></center></td>
                </tr>
            )
        })

        return (
            <React.Fragment>
                <div className="container-fluid">
                    <table className="table cart">
                        <thead>
                            <tr>
                                <th scope="col"><center>Item</center></th>
                                <th scope="col"><center>Name</center></th>
                                <th scope="col"><center>Quantity</center></th>
                                <th scope="col"><center>Price</center></th>
                                <th scope="col"><center>SubTotal</center></th>
                                <th scope="col"><center></center></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart}
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><center><b>Total Price</b></center></td>
                                <td><center>Rp.{total.toLocaleString()}</center></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    {
                        this.state.cartCoba === undefined ? <button onClick={() => {
                            this.setState({
                                show: true,
                                message: "You Don't Have Items To Order"
                            })
                        }} className="btn btn-success">Checkout</button>
                        :  <Link to="/Checkout"><button className="btn btn-success">Checkout</button></Link>
                            
                    }
                    {this.state.show ?
                        <SweetAlert
                            show={this.state.show}
                            title="Alert"
                            text={this.state.message}
                            onConfirm={() => { this.setState({ show: false, message: '' }) }}
                        /> :
                        ''
                    }
                </div>
            </React.Fragment>
        )
    }
}
