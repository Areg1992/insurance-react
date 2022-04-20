import React from "react";
import './Button.scss';

function Button({children, buttonType, text, icon,  ...props}) {
    return (
        <button className={`btn btn-${buttonType}`} {...props}>
            {text? (
                <span>
                    {text}
                </span>
            ):null}
            {icon ? (
                <i>
                    +
                </i>
            ):null}
        </button>
    )
}

export default Button;