import React from "react";

function Post(title,description,id){
    return(
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Post