import React, { Component } from 'react'
import './menbeltdetails.css'
import axios from 'axios'

export default class Menbeltdetails extends Component {
    constructor() {
        super()
        this.state = {
            details: [],
            counter: 0
        }
    }

    plusCounter = ()=>{
        this.setState({
            counter: parseInt(this.state.counter) + 1
        })
    }

    minusCounter = ()=>{
        this.setState({
            counter: parseInt(this.state.counter) - 1
        })
    }

    componentDidMount() {
        console.log(this.props)
        let product = this.props.match.params.profil
        let url = `http://localhost:3320/menbelts/${product}`
        axios.get(url)
            .then((info) => {
                // console.log(info.data)
                this.setState({
                    details: info.data
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {

        let details_product = this.state.details.map((val, i) => {
            let product_name = val.product_name;
            let img1 = val.product_img1;
            let price = val.price;
            let product_description = val.product_description;
            let material_description = val.material_description;
            let product_design = val.product_design;
            let dimension = val.dimension;
            let size = val.size;
            let color = val.color;
            let stock = val.stock;
            return (
                <div key="i" className="container-details-product" >
                    <div className="row">
                        <div className="col-md-3">
                            <div>
                                <h4>Product Description</h4>
                                <hr />
                                <p><b>Item Name:</b><br />{product_name}</p>
                                <p><b>Item Description:</b><br />{product_description}</p>
                                <p><b>Price:</b><br />Rp.{price.toLocaleString()}</p>
                                <p><b>Quantity:</b></p>
                                <div class="input-group input-group-sm mb-3 legnth-responsive">
                                <div class="input-group-prepend">
                                        <button onClick={this.minusCounter} class="btn btn-outline-secondary" type="button" id="plusCounter">-</button>
                                    </div>
                                    <input type="text" class="form-control" placeholder="" aria-label="quantity" value={this.state.counter} />
                                    <div class="input-group-prepend">
                                        <button onClick={this.plusCounter} class="btn btn-outline-secondary" type="button" id="minusCounter">+</button>
                                    </div>
                                    <div>
                                        <button class="btn btn-success">Add to Cart</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 pict">
                                <div>
                                    <img src={img1} alt="1" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div>
                                    <h4><b></b>Materials & Design</h4>
                                    <hr />
                                    <p><b>Material Description:</b><br />{material_description}</p>
                                    <p><b>Design:</b><br />{product_design}</p>
                                    <p><b>Size:</b><br />{size}</p>
                                    <p><b>Dimension:</b><br />{dimension}</p>
                                    <p><b>Color:</b><br />{color}</p>
                                    <p><b>Stock:</b><br />{stock}</p>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })
                return (
            <React.Fragment>
                        {details_product}
                    </React.Fragment>
                    )
                }
}