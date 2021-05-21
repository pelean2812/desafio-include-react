import React from 'react'

import Banner from './banner/Banner'
import Section from './content/Section'
import Menu from './menu/Menu'

export default (props) => {
    return (
        <div>
            <Menu paginaInicio={true} />
            <Banner textBig="Olá, Bem vindos ao Meu Blog!" textSmall="Versão portada para o React JS"
                botaoInicio={true} textoBotao="Me conheça" />
            <Section aName="quemEuSou" sectionName="description" title="Quem eu sou?"
            source="/imagens/eu.png">
                <div className="text">
                    <h2>Olá! Me chamo pedro Leandro Batista Marques.</h2>

                    <p>
                        Atualmente estou cursando o 4º Período de Ciências e Tecnologia com Ênfase
                        em Tecnologia de Computação na Universidade Federal do Rio Grande do Norte.
                        <br /><br />
                        Também atuo na Monitoria de Cálculo III por meio do Projeto Avaliação
                        Contínua de Exercícios de Cálculo.
                    </p>
                </div>
            </Section>

            <Section aName="minhasHabilidades" sectionName="habilities" title="Minhas habilidades"
            source="/imagens/code.jpg">
                <ol>
                    <li> Tenho conhecimento razoável em Java, Javascript, C++. </li>
                    <li> Tenho um pouco de conhecimento em phyton. </li>
                    <li> Tenho conhecimentos em Banco de dados relacionais (como mySQL).</li>
                    <li> Sei um pouco de HTML e CSS e Bootstrap. </li>
                    <li> Tenho um pouco de conhecimento em JSF e JPA (JavaServerFaces e JavaPersistenceAPI) e PrimeFaces. </li>
                    <li> Compreendo razoavelmente inglês. </li>
                    <li> Tenho um bom conhecimento em cálculo difercial e integral.</li>
                </ol>
            </Section>

            <Section aName="meusHobbies" sectionName="hobby" title="Meus Hobbies"
            source="imagens/levi.png">
                <ol>
                    <li> Jogar jogos de tiro em primeira pessoa (FPS), em especial CS:GO, valorant e battlefield 4. </li>
                    <li> Não só fps, mas também jogos com uma boa história (The Witcher 3, Hellblade) e alguns indies como Titan Souls e Fall Guys.</li>
                    <li> Assistir animes. Meus favoritos são: Attack on Titan, My Hero Academia e RE:ZERO.</li>
                </ol>
            </Section>
        </div>
    )
}
