import React, { Component } from 'react'
import './confirmpayment.css'
import axios from 'axios'
import SweetAlert from 'sweetalert2-react'

export default class ConirmPayment extends Component {
    constructor() {
        super()
        this.state = {
            user_id: '',
            first_name: '',
            last_name: '',
            user_email: '',
            user_phone: '',
            user_address: '',
            province: '',
            user_postcode: '',
            transactionID: '',
            transfer_slip: '',
            show: false,
            message: ''
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

        let url2 = `http://localhost:3320/transactions/${JSON.parse(localStorage.getItem('User')).user_id}`
        axios.get(url2)
            .then((info) => {
                console.log(info)
                this.setState({ transactionID: info.data[0].transaction_id })
            })
            .catch((err) => {
                console.log(err)
            })

        let url3 = `http://localhost:3320/transaction`
        axios.get(url3)
            .then((info) => {
                console.log(info)
                console.log('kontol')
                this.setState({ transactionID: info.data[0].transaction_id })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    simpanData = () => {
        let url3 = 'http://localhost:3320/tramsferslip'
        let trfData = new FormData()
        trfData.append('transaction_id', this.state.transactionID)
        trfData.append('transfer_slip', this.state.transfer_slip, this.state.transfer_slip.name)
        console.log(trfData)
        axios.post(url3, trfData)
            .then((info) => {
                console.log(info)
            })
            .catch((err) => {
                console.log(err)
            })

        this.setState({
            show: true,
            message: 'Thanks for shopping on Arsenic, wait our email about confirmation payment'
        }, function () {
            setTimeout(() => {
                this.setState({
                    show: false,
                    message: ''
                });
                window.location.href="/"
            }, 2000);
        })

        let url4 = `http://localhost:3320/deletefromcart/${JSON.parse(localStorage.getItem('User')).user_id}`
        axios.delete(url4)
        .then ((info)=>{
            console.log(info)
        })
        .catch ((err)=>{
            console.log(err)
        })
    }

    render() {
        console.log(this.state.transactionID)
        console.log('hehehe')
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
                                            className="form-control" placeholder="Input Your Front Name" readOnly />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label forhtml="lastName">Last Name</label>
                                        <input value={this.state.last_name} name="last_name" type="text" onChange={this.handleInput}
                                            className="form-control" placeholder="Input Your Last Name" readOnly />
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
                                            className="form-control" placeholder="Input Your Phone Number" readOnly />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label forhtml="inputState">Province</label>
                                        <select className="form-control" value={this.state.province} name="province" onChange={this.handleInput} readOnly>
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
                                            className="form-control" placeholder="Input Your Postcode" readOnly />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label forhtml="inputPhone">Address</label>
                                    <textarea value={this.state.user_address || ''} name="user_address" type="text" rows="6" onChange={this.handleInput}
                                        className="form-control" placeholder="Input Your Address" readOnly />
                                </div>
                                <div className="form-group">
                                    <label>Upload Your Transfer Slip</label><br />
                                    <input onChange={(e) => { this.setState({ transfer_slip: e.target.files[0] }) }} type="file" />
                                    <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                                </div>
                                <div className="form-group">
                                    <button type="submit" onClick={this.simpanData} className="btn btn-success">Confirm Your Order</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}