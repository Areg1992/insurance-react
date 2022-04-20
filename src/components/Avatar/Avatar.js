import React from "react";
import './Avatar.scss';

function Avatar({img, url}) {
    return (
        <a href={url} className="avatar">
            <img
                src={img}
                alt="User" title="User" className="img-object-cover"/>
        </a>
    )
}

export default Avatar;