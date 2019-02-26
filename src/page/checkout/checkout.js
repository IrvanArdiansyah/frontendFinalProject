import React, { Component } from 'react'
import './checkout.css'
import axios from 'axios'
// import { Link } from 'react-router-dom'

export default class Checkout extends Component {
    constructor() {
        super()
        this.state = {
            itemsToOrder: [],
            userDetails: [],
            user_id: '',
            first_name: '',
            last_name: '',
            user_email: '',
            user_phone: '',
            user_address: '',
            province: '',
            user_postcode: '',
            products: '',
            quantity: ''
        }
    }

    componentDidMount() {
        this.setState({
            userDetails: JSON.parse(localStorage.getItem('User')),
            user_id: JSON.parse(localStorage.getItem('User')).user_id
        })
        let url = `http://localhost:3320/getuser/${JSON.parse(localStorage.getItem('User')).user_id}`
        axios.get(url)
            .then((info) => {
                // console.log(info)
                this.setState({
                    first_name: info.data[0].first_name,
                    last_name: info.data[0].last_name,
                    user_email: info.data[0].user_email,
                    user_phone: info.data[0].user_phone,
                    user_address: info.data[0].user_address,
                    province: info.data[0].province,
                    user_postcode: info.data[0].user_postcode,
                })
            })
            .catch((err) => {
                console.log(err)
            })

        let url2 = `http://localhost:3320/cartitem/${JSON.parse(localStorage.getItem('User')).user_id}`
        axios.get(url2)
        .then((info)=>{
            this.setState({
                itemsToOrder: info.data
            })
            let a = this.state.itemsToOrder
            let b = ''
            let c = ''
            for (let i=0; i<a.length; i++) {
                b+= a[i].product_name+', '
            }
            for (let i=0; i<a.length; i++) {
                c+= a[i].quantity+', '
            }
            this.setState({
                products: b.toString(),
                quantity: c.toString()
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    simpanData = () => {
        let url = `http://localhost:3320/userupdate/${this.state.user_id}`
        let userRegister = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            user_email: this.state.user_email,
            user_phone: this.state.user_phone,
            user_address: this.state.user_address,
            province: this.state.province,
            user_postcode: this.state.user_postcode
        }
        axios.put(url, userRegister)
            .then((info) => {
                console.log(info.data);
            })
            .catch((err) => {
                console.log(err)
            })
        
        let url2 = `http://localhost:3320/addtotransaction`
        let dataToOrder = {
            user_id: JSON.parse(localStorage.getItem('User')).user_id,
            products: this.state.products,
            quantity: this.state.quantity,
            status: 'not paid',
            total_price: JSON.parse(localStorage.getItem('TotalPrice'))
        }
        axios.post(url2, dataToOrder)
        .then((info)=>{
            console.log(info)
        })
        .catch((err)=>{
            console.log(err)
        })

        let url3 = 'http://localhost:3320/email'
        let data = {
            user_id: JSON.parse(localStorage.getItem('User')).user_id,
            products: this.state.products,
            quantity: this.state.quantity,
            total_price: JSON.parse(localStorage.getItem('TotalPrice')),
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            user_email: this.state.user_email,
            user_phone: this.state.user_phone,
            user_address: this.state.user_address,
            province: this.state.province,
            user_postcode: this.state.user_postcode
        }
        axios.post(url3, data)
        .then((info)=>{
            console.log(info)
        })
        .catch((err)=>{
            console.log(err)
        })
        this.props.history.push('/Checkout/Confirmation')
    }
    render() {
        console.log(this.state.user_email)
        return (
            <React.Fragment>
                <div className="container checkout">
                    <div className="card shadow box">
                        <div className="card-header">
                            <h4><span role="img" aria-label="1">📝</span>Checkout Confrimation</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={(e) => { e.preventDefault() }}>
                                <h4>Shipping Data</h4>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label forhtml="frontName">First Name</label>
                                        <input value={this.state.first_name} name="first_name" type="text" onChange={this.handleInput}
                                            className="form-control" placeholder="Input Your Front Name" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label forhtml="lastName">Last Name</label>
                                        <input value={this.state.last_name} name="last_name" type="text" onChange={this.handleInput}
                                            className="form-control" placeholder="Input Your Last Name" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label forhtml="inputEmail">Email</label>
                                        <input value={this.state.user_email} name="user_email" type="email" onChange={this.handleInput}
                                            className="form-control" placeholder="Input Your Email" readOnly />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label forhtml="inputPhone">Phone</label>
                                        <input value={this.state.user_phone || ''} name="user_phone" type="number" onChange={this.handleInput}
                                            className="form-control" placeholder="Input Your Phone Number" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label forhtml="inputState">Province</label>
                                        <select className="form-control" value={this.state.province} name="province" onChange={this.handleInput}>
                                            <option name="province" value="Aceh">Aceh</option>
                                            <option name="province" value="Sumatera Utara">Sumatera Utara</option>
                                            <option name="province" value="Sumatera Barat">Sumatera Barat</option>
                                            <option name="province" value="Riau">Riau</option>
                                            <option name="province" value="Jambi">Jambi</option>
                                            <option name="province" value="Sumatera Selatan">Sumatera Selatan</option>
                                            <option name="province" value="Bengkulu">Bengkulu</option>
                                            <option name="province" value="Lampung">Lampung</option>
                                            <option name="province" value="Kep. Bangka Belitung">Kep. Bangka Belitung</option>
                                            <option name="province" value="Kepulauan Riau">Kepulauan Riau</option>
                                            <option name="province" value="DKI Jakarta">DKI Jakarta</option>
                                            <option name="province" value="Jawa Barat">Jawa Barat</option>
                                            <option name="province" value="Banten">Banten</option>
                                            <option name="province" value="Jawa Tengah">Jawa Tengah</option>
                                            <option name="province" value="DI Yogyakarta">DI Yogyakarta</option>
                                            <option name="province" value="Jawa Timur">Jawa Timur</option>
                                            <option name="province" value="Kalimantan Barat">Kalimantan Barat</option>
                                            <option name="province" value="Kalimantan Tengah">Kalimantan Tengah</option>
                                            <option name="province" value="Kalimantan Selatan">Kalimantan Selatan</option>
                                            <option name="province" value="Kalimantan Timur">Kalimantan Timur</option>
                                            <option name="province" value="Kalimantan Utara">Kalimantan Utara</option>
                                            <option name="province" value="Bali">Bali</option>
                                            <option name="province" value="Nusa Tenggara Timur">Nusa Tenggara Timur</option>
                                            <option name="province" value="Nusa Tenggara Barat">Nusa Tenggara Barat</option>
                                            <option name="province" value="Sulawesi Utara">Sulawesi Utara</option>
                                            <option name="province" value="Sulawesi Tengah">Sulawesi Tengah</option>
                                            <option name="province" value="Sulawesi Selatan">Sulawesi Selatan</option>
                                            <option name="province" value="Sulawesi Tenggara">Sulawesi Tenggara</option>
                                            <option name="province" value="Sulawesi Barat">Sulawesi Barat</option>
                                            <option name="province" value="Gorontalo">Gorontalo</option>
                                            <option name="province" value="Maluku">Maluku</option>
                                            <option name="province" value="Maluku Utara">Maluku Utara</option>
                                            <option name="province" value="Papua">Papua</option>
                                            <option name="province" value="Papua Barat">Papua Barat</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label forhtml="inputPostCode">Postcode</label>
                                        <input value={this.state.user_postcode || ''} name="user_postcode" type="number" onChange={this.handleInput}
                                            className="form-control" placeholder="Input Your Postcode" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label forhtml="inputPhone">Address</label>
                                    <textarea value={this.state.user_address || ''} name="user_address" type="text" rows="6" onChange={this.handleInput}
                                        className="form-control" placeholder="Input Your Address" />
                                </div>
                                <div className="form-group">
                                    <button type="submit" onClick={this.simpanData} className="btn btn-success">Confirm Your Shipping Data</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}