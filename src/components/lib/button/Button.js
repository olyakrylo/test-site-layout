import React from 'react'
import './button.css'

export default function Button({title, addClasses, clickFunction}) {

    return (
        <button className={'button ' + addClasses}
                onClick={clickFunction} >
            {title}
        </button>
    )
} 