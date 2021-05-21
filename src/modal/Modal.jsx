import React from 'react'

export default props => (
    <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalCenterTitle">Adicione um título e o conteúdo do seu post</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div className="modal-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="postTitle">Título do post</label>
                            <input id='title' className='form-control' placeholder='Insira o título da sua postagem'
                                value={props.title} onChange={props.handleChangeTitle} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="postContent">Conteúdo do Post</label>
                            <input id='description' className='form-control' placeholder='Insira o título da sua postagem'
                                value={props.description} onChange={props.handleChangeDescription} />
                        </div>
                        <button id="newPost" type="submit" className="btn btn-primary"
                        onClick={props.handleAdd}>Criar post</button>
                    </form>
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
)