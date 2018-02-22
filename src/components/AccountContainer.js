import React, { Component } from 'react';
import axios from 'axios';
import Account from './Account';

export default class AccountContainer extends Component {
    constructor(){
        super()
        this.state ={
            loading: false,
            user:null,
            message: null,
        }
    }

    componentDidMount(){
        this.setState({loading: true});
        axios.get('/api/user-data').then(response => {
            console.log(response.data);
            this.setState({
                user: response.data,
                loading: false
            })
        }).catch(error => {
            this.setState({
                message: 'you are unauthorized',
                loading: false
            })
        }) 
       
    }
    render() {
        
        const {user, loading, message} = this.state;
       
        return (
            <div>
                {loading && <div>Loading...</div>}
                {user && <Account 
                    name={user.name}
                    email={user.email}
                    id={user.id}
                    amount={100 + Math.floor(Math.random() * 100)}
                />
                }
            
            <div>{message && <div>{message}</div>}</div>
            
            </div>
        );
    }
}