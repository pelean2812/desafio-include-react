import React from 'react'
import './Section.css'

import ContentText from './ContentText'

export default props => (
    <a name={props.aName}>
        <section className={props.sectionName}>
            <div className="heading">
                <h1>{props.title}</h1>
            </div>

            <ContentText source={props.source}>
                {props.children}
            </ContentText>
        </section>
    </a>
)