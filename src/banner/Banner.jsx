import React from 'react'
import './Banner.css'

export default props => {
    return (
        <section className="banner">
            <div className="bannerText">
                <h1>{props.textBig}</h1>
                <h2>{props.textSmall || ""}</h2>
                {props.botaoInicio ?
                    <a href="#quemEuSou">
                        <button type="button" className="btn btn-danger">Me conheça</button>
                    </a>
        
                : <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#exampleModalCenter">Criar post</button>
                }
            </div>
        </section>
    )
}
