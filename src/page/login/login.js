import React, { Component } from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import SweetAlert from 'sweetalert2-react'

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            user_email: '',
            user_password: '',
            show: false,
            message: '',
            userData: []
        }
    }

    handleUsuerInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    Login = () => {
        let url = 'http://localhost:3320/login'
        let userLogin = {
            user_email: this.state.user_email,
            user_password: this.state.user_password
        }
        axios.post(url, userLogin)
            .then((info) => {
                if (info.data.status === "email doesnt exist") {
                    console.log(info.data)
                    this.setState({
                        show: true,
                        message: "email doesnt exist"
                    })
                } else if (info.data.status === "password was incorect") {
                    console.log(info.data)
                    this.setState({
                        show: true,
                        message: "password was incorect"
                    })
                } else if (info.data.status === "login success") {
                    localStorage.setItem('User', JSON.stringify(info.data.result[0]))
                    console.log(info.data)
                    this.setState({
                        show: true,
                        message: "login success",
                        userData: info.data.result[0]
                    }, () => {
                        setTimeout(() => {
                            this.setState({
                                show: false
                            })
                            window.location.href="/"
                        }, 1250)
                    })
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        return (
            <React.Fragment>
                <div className="container login">
                    <div className="card shadow">
                        <div className="card-header">
                            <h4><span role="img" aria-label="1">🔑</span> Account Log in</h4>
                        </div>
                        <div className="card-body">
                            {this.state.show ?
                                <SweetAlert
                                    show={this.state.show}
                                    title="Alert"
                                    text={this.state.message}
                                /> :
                                ''
                            }
                            <form onSubmit={(e) => { e.preventDefault() }}>
                                <div className="form-group">
                                    <label htmlFor="inputEmail">Email</label>
                                    <input onChange={this.handleUsuerInput} type="email" className="form-control" name="user_email" placeholder="Input Your Email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputPassword">Password</label>
                                    <input onChange={this.handleUsuerInput} type="password" className="form-control" name="user_password" placeholder="Input Your Password" />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-outline-warning" onClick={this.Login}>Log in</button>
                                </div>
                                <div className="card-footer text-center footer-login">
                                    <small className="text">Didn't have an account? <Link to="register">Register</Link></small>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}