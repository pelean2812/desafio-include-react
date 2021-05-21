import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import './app.css'

import React from 'react'

import Routes from '../main/routes'
import Footer from '../footer/Footer'

export default (props) => (
    <div>
        <Routes />
        <Footer />
    </div>
)