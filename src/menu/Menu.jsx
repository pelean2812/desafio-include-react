import React from 'react'
import './Menu.css'

export default props => {

    //modificar a navbar
    window.addEventListener('scroll', () => {
        let header = document.querySelector('header');
        header.classList.toggle('whiteNav', window.scrollY > 0);
    });

    return (
        <header>
            <a name="inicio"></a>
            <div className="navBar">
                <h1 id="logo">MyBlog</h1>
                
                    {props.paginaInicio ?
                        <ul>
                            <li><a href="#inicio"><button type="button" className="btn btn-outline-warning">Início</button></a></li>
                            <li><a href="#/posts"><button type="button" className="btn btn-outline-warning">Meus posts</button></a></li>
                            <li><a href="#quemEuSou"><button type="button" className="btn btn-outline-warning">Quem eu sou?</button></a></li>
                            <li><a href="#minhasHabilidades"><button type="button" className="btn btn-outline-warning">Minhas Habilidades</button></a></li>
                            <li><a href="#meusHobbies"><button type="button" className="btn btn-outline-warning">Meus Hobbies</button></a></li>
                            <li><a href="#contact"><button type="button" className="btn btn-outline-warning">Me Contacte!</button></a></li>
                        </ul>
                        : <ul><li><a href="#/myBlog"><button type="button" className="btn btn-outline-warning">Voltar para o início</button></a></li></ul>}
            </div>
        </header>
    )
}


