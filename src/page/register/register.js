import React, { Component } from 'react'
import './register.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import 'flatpickr/dist/themes/material_green.css'
// import DatePicker from 'react-bootstrap-date-picker'

export default class Register extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            birthday: '',
            gender: '',
            user_email: '',
            user_password: '',
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    simpanData = () => {
        let url = 'http://localhost:3320/register'
        let userRegister = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            birthday: this.state.birthday,
            gender: this.state.gender,
            user_email: this.state.user_email,
            user_password: this.state.user_password
        }
        axios.post(url, userRegister)
            .then((info) => {
                console.log(info.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        return (
            <React.Fragment>
                <div className="container register">
                    <div className="card shadow">
                        <div className="card-header">
                            <h4><span role="img" aria-label="1">📝</span> Account Register</h4>
                        </div>
                        <div className="card-body">
                            <form >
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label forhtml="frontName">First Name</label>
                                        <input name="first_name" type="text" onChange={this.handleInput}
                                            className="form-control" placeholder="Input Your Front Name" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label forhtml="lastName">Last Name</label>
                                        <input name="last_name" type="text" onChange={this.handleInput}
                                            className="form-control" placeholder="Input Your Last Name" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label forhtml="inputGender">Gender</label>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" onChange={this.handleInput} name="gender" value="Men" />
                                        <label className="form-check-label" forhtml="gridRadios1">Men</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" onChange={this.handleInput} name="gender" value="Women" />
                                        <label className="form-check-label" forhtml="gridRadios2">Women</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label forhtml="inputBirthday">Birthday</label><br/>

                                    {/* <Flatpickr
                                        value={this.state.birthday}
                                        // onChange={this.handleInput} 
                                        name="birthday"/> */}

                                    <input name="birthday" type="date" onChange={this.handleInput}
                                    className="form-control" placeholder="Input Your Birthday" />
                                </div>
                                <div className="form-group">
                                    <label forhtml="inputEmail">Email</label>
                                    <input name="user_email" type="email" onChange={this.handleInput}
                                        className="form-control" placeholder="Input Your Email" />
                                </div>
                                <div className="form-group">
                                    <label forhtml="inputPassword">Password</label>
                                    <input name="user_password" type="password" onChange={this.handleInput}
                                        className="form-control" placeholder="Input Your Password" />
                                </div>
                                <div className="form-group">
                                    <button type="submit" onClick={this.simpanData} className="btn btn-outline-warning">Sign up</button>
                                </div>
                                <div className="card-footer text-center footer-register">
                                    <small className="text">Already have an account? <Link to="login">Log in</Link></small>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}