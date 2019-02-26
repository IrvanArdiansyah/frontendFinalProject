import React, { Component } from 'react'
import './menbagdetails.css'
import axios from 'axios'
import SweetAlert from 'sweetalert2-react'
export default class Menbagdetails extends Component {
    constructor() {
        super()
        this.state = {
            user_id: '',
            counter: 1,
            cartstatus: false,
            product_id: '',
            product_name: '',
            product_img1: '',
            product_img2: '',
            product_img3: '',
            product_img4: '',
            product_description: '',
            material_description: '',
            product_design: '',
            price: '',
            dimension: '',
            size: '',
            color: '',
            stock: '',
            show: false,
            message: ''
        }
    }

    handlerPlus = () => {
        if (this.state.counter === this.state.stock) {
            this.setState({
                counter: parseInt(this.state.counter) + 0
            })
        } else {
            this.setState({
                counter: parseInt(this.state.counter) + 1
            })
        }
    }

    handlerMinus = () => {
        if (this.state.counter === 1) {
            this.setState({
                counter: parseInt(this.state.counter) - 0
            })
        } else {
            this.setState({
                counter: parseInt(this.state.counter) - 1
            })
        }
    }

    addToCart = () => {
        let url = 'http://localhost:3320/addtocart'
        let cartData = {
            user_id: this.state.user_id,
            product_id: this.state.product_id,
            quantity: this.state.counter,
            total_price: parseInt(this.state.price) * parseInt(this.state.counter)
        }
        axios.post(url, cartData)
            .then((info) => {
                if (this.state.user_id === null) {
                    this.setState({
                        show: true,
                        message: "User must logged in"
                    })
                } else {
                    this.setState({
                        cartstatus: true,
                        show: true,
                        message: "Success add to cart"
                    }, () => {
                        setTimeout(() => {
                            this.setState({
                                show: false
                            })
                        }, 200)
                    })
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    removeFromCart = () => {
        this.setState({
            cartstatus: false,
            show: true,
            message: "Removed from cart"
        }, () => {
            setTimeout(() => {
                this.setState({
                    show: false
                })
            }, 200)
        })
        let url = `http://localhost:3320/deletefromcart/${this.state.user_id}/${this.state.product_id}`
        axios.delete(url)
            .then((info) => {
                console.log(info)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    componentDidMount() {
        let product = this.props.match.params.profil
        let url = `http://localhost:3320/menwallets/${product}`
        axios.get(url)
            .then((info) => {
                if (!JSON.parse(localStorage.getItem('User'))) {
                    this.setState({
                        user_id: null
                    })
                } else if (JSON.parse(localStorage.getItem('User'))) {
                    this.setState({
                        user_id: JSON.parse(localStorage.getItem('User')).user_id
                    })
                }
                let product = info.data[0]
                this.setState({
                    product_id: product.product_id,
                    product_name: product.product_name,
                    product_img1: product.product_img1,
                    product_img2: product.product_img2,
                    product_img3: product.product_img3,
                    product_img4: product.product_img4,
                    product_description: product.product_description,
                    material_description: product.material_description,
                    product_design: product.product_design,
                    price: product.price,
                    dimension: product.dimension,
                    size: product.size,
                    color: product.color,
                    stock: product.stock
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        return (
            <React.Fragment>
                {this.state.show ?
                    <SweetAlert
                        show={this.state.show}
                        title="Alert"
                        text={this.state.message}
                    /> :
                    ''
                }
                <div className="container-details-product" >
                    <div className="row">
                        <div className="col-md-3">
                            <div>
                                <h4>Product Description</h4>
                                <hr />
                                <p><b>Item Name:</b><br />{this.state.product_name}</p>
                                <p><b>Item Description:</b><br />{this.state.product_description}</p>
                                <p><b>Price:</b><br />Rp.{this.state.price.toLocaleString()}</p>
                                <p><b>Quantity:</b></p>
                                <div className="input-group input-group-sm mb-3 legnth-responsive">
                                    <div className="input-group-prepend">
                                        <button onClick={this.handlerMinus} className="btn btn-outline-secondary" type="button">-</button>
                                    </div>
                                    <input type="text" className="form-control" onChange={this.handlerPlus} aria-label="quantity" value={this.state.counter} />
                                    <div className="input-group-prepend">
                                        <button onClick={this.handlerPlus} className="btn btn-outline-secondary" type="button">+</button>
                                    </div>
                                    <div>
                                        {this.state.cartstatus === false ?
                                            <button className="btn btn-success-edited" onClick={this.addToCart}>Add to Cart</button> :
                                            <button className="btn btn-danger-edited" onClick={this.removeFromCart}>Remove From Cart</button>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 pict">
                            <div>
                                <img src={this.state.product_img1} alt="1" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div>
                                <h4><b></b>Materials & Design</h4>
                                <hr />
                                <p><b>Material Description:</b><br />{this.state.material_description}</p>
                                <p><b>Design:</b><br />{this.state.product_design}</p>
                                <p><b>Size:</b><br />{this.state.size === undefined ? this.state.size : "-"}</p>
                                <p><b>Dimension:</b><br />{this.state.dimension}</p>
                                <p><b>Color:</b><br />{this.state.color}</p>
                                <p><b>Stock:</b><br />{this.state.stock}</p>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}