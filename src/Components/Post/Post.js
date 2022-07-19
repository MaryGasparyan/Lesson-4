import React from 'react';

const Post = ({title,description})=> {
    return(
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Post