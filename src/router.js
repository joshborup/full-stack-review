import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Account from './components/Account';

export default <Fragment>
    
        <Route exact path='/' component={Login} />
        <Route path='/account' component={Account} />
    
</Fragment>