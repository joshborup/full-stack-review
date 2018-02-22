import React, { Component } from 'react';
import './account.css'

export default class Account extends Component {
    render() {
        const { picture, name , email, amount, id} = this.props;
        return (
            <div className='account'>
                <h1>Account</h1>
                <img src={picture}/>
                <div><span className='bold'>Name: {name}</span></div>
                <div><span className='bold'>Email: {email}</span></div>
                <div><span className='bold'>Amount: ${amount}</span></div>
                <div><span className='bold'>ID: {id}</span></div>
            </div>
        );
    }
}