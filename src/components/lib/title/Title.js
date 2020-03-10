import React from 'react'
import './title.css'

export default function Title({addClass, name, description}) {

    return (
        <div className={'title ' + (addClass || '')}>
            <h2 className='title__name'>{name}</h2>
            <p className='title__description'>{description}</p>
        </div>
    )
}