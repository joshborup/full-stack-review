import React, { Component } from 'react';
import './account.css'

export default class Account extends Component {
    render() {
        const {picture, name , email, amount, id} = this.props;
        return (
            <div className='account'>
                <h1>Account</h1>
                <img src={picture}/>
                <div className='userInfo'>
                    <div><span className='bold'>Name: <span className='accountInfo'>{name}</span></span></div>
                    <div><span className='bold'>Email: <span className='accountInfo'>{email}</span></span></div>
                    <div><span className='bold'>Amount: <span className='accountInfo'>${amount}</span></span></div>
                    <div><span className='bold'>ID:<span className='accountInfo'>{id}</span></span></div>
                </div>
            </div>
        );
    }
}