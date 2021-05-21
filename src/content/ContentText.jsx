import React from 'react'
import './Section.css'

export default props => (
    <div className="content">
        <div className="contentText">
            {props.children}
        </div>

        <div className="contentBoxImg">
            <img src={props.source}></img>
        </div>
    </div>
)