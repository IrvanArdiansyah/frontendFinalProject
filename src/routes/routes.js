import React, { Component } from 'react';
import { Route , Switch } from 'react-router-dom'
import Home from '../page/home/home';
import Men from '../page/men/men'
import Women from '../page/women/women'
import Register from '../page/register/register'
import Login from '../page/login/login'
import Menwallets from '../page/men/categorymen/menwallets/menwallets'
import Menswalletdetails from '../page/men/categorymen/menwallets/menwalletdetails/menwalletsdetails'
import Menbelts from '../page/men/categorymen/menbelts/menbelts'
import Menbeltsdetails from '../page/men/categorymen/menbelts/menbeltdetails/menbeltdetails'
import Menbags from '../page/men/categorymen/menbags/menbags'
import Menbagdetails from '../page/men/categorymen/menbags/menbagdetails/menbagdetails'
import Cart from '../page/cart/cart'

export default class Routes extends Component {
    render () {
        return (
            <React.Fragment>
                <Switch> 
                <Route exact path ='/' component={Home}/>      
                <Route exact path ='/Men/Wallets' component={Menwallets}/>
                <Route exact path ='/Men/Wallets/Details/:profil' component={Menswalletdetails}/>
                <Route exact path ='/Men/Belts' component={Menbelts}/>
                <Route exact path ='/Men/Belts/Details/:profil' component={Menbeltsdetails}/>
                <Route exact path ='/Men/Bags' component={Menbags}/>
                <Route exact path ='/Men/Bags/Details/:profil' component={Menbagdetails}/>
                <Route exact path ='/Women' component={Women}/>
                <Route exact path ='/Men' component={Men}/>
                <Route exact path ='/Register' component={Register}/>
                <Route exact path ='/Login' component={Login}/>
                <Route exact path ='/Cart' component={Cart}/>
                </Switch>
            </React.Fragment>
        )
    }
}

