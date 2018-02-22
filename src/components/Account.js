import React, { Component } from 'react';
import './account.css'

export default class Account extends Component {
    render() {
        const { picture, name , email, amount, id} = this.props;
        return (
            <div className='account'>
                <h1>Account</h1>
                <img src={picture}/>
                <div><span className='bold'>Name</span></div>
                <div><span className='bold'>Email</span></div>
                <div><span className='bold'>Amount</span></div>
                <div><span className='bold'>ID</span></div>
            </div>
        );
    }
}