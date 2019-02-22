import React, { Component } from 'react';
import axios from 'axios'
import './cart.css'

export default class Cart extends Component {
    constructor() {
        super()
        this.state = {
            userid: '',
            cartItem: []
        }
    }

    componentDidMount() {
        let url = `http://localhost:3320/cartitem/${localStorage.getItem('User') ? JSON.parse(localStorage.getItem('User')).user_id : this.state.userid}`
        axios.get(url)
            .then((info) => {
                this.setState({
                    cartItem: info.data
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        console.log(this.state)
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
                            window.location.href="/Cart"
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
                                <th scope="col"><center>SubTotal</center></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart}
                        </tbody>
                    </table>
                    <button className="btn btn-success">Checkout</button>
                </div>
            </React.Fragment>
        )
    }
}
