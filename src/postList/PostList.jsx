import React from 'react'

export default props => {
    const renderContent = () => {
        const list = props.list || []

        return list.map(post => (
            <div className="card text-center">
                <div key={post._id} className="card-header">
                    {post.title}
                </div>

                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>{post.description}</p>
                    </blockquote>
                </div>
            </div>
        ))
    }

    return (
        <div>
            {renderContent()}
        </div>
    )
}