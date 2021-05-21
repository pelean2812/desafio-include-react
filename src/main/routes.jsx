import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'
import Landing from '../Landing'
import Posts from '../Posts'

export default props => (
    <Router history={hashHistory}>
        <Route path='/myBlog' component={Landing}></Route>
        <Route path='/posts' component={Posts}></Route>
        <Redirect from ='*' to='/myBlog'></Redirect>    
    </Router>
)