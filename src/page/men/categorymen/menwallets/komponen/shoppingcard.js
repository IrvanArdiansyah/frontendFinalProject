import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './shoppingcard.css'
export default class ShoppingCard extends Component {
    state = {data: ""}
    render() {
        console.log(this.props)
        let products = this.props.prods.map((val, i) => {
            return (
                <div key={i}className="col-md-3">
                    <div className="card" style={{ width: '250px' }}>
                        <Link to={`/Men/Wallets/Details/${val.product_id}`}>
                            <img src={val.product_img1} className="card-img-top" alt="1" /></Link>
                            <div className="card-body">
                            <h5 className="card-title">{val.product_name}</h5>
                            <hr/>
                            <p className="card-text">Rp.{val.price.toLocaleString()}</p>
                        </div>
                    </div>
                </div>

            )
        })
        console.log(products)

        return (
             <div className="row">
                 {products}
             </div>   
        )
    }
}

