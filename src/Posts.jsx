import React, { Component } from 'react'
import axios from 'axios'

import Banner from './banner/Banner'
import Menu from './menu/Menu'
import Modal from './modal/Modal'
import PostList from './postList/PostList'

const URL = 'http://localhost:3003/api/myBlog'

export default class Posts extends Component {

    constructor(props) {
        super(props)
        this.state = {title: '', description: '', list: []}
        this.handleChangeTitle = this.handleChangeTitle.bind(this)
        this.handleChangeDescription = this.handleChangeDescription.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.refresh()
    }

    refresh(){
        axios.get(`${URL}?sort=-createdAt`).then(resp => this.setState({...this.state, title: '', description: '', list: resp.data}))
    }

    handleChangeTitle(e){
        this.setState({...this.state, title: e.target.value})
    }

    handleChangeDescription(e){
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd(){
        const title = this.state.title
        const description = this.state.description
        axios.post(URL, {description, title}).then(resp => this.refresh())
    }

    render() {
        return (
            <div>
                <Menu paginaInicio={false} text="Voltar para o início"/>
                <Banner textBig="Meus posts no blog:" botaoInicio={false}/>
                <Modal title={this.state.title} description={this.state.description} 
                handleChangeTitle={this.handleChangeTitle} handleChangeDescription={this.handleChangeDescription} 
                handleAdd={this.handleAdd}/>
                <PostList />
            </div>
        )
    }
}