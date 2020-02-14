import React from 'react'
import '../../../../css/style.css'

export default class ListElement extends React.Component {
    render() {
        return (
            <li>
                <div className='service__item'></div>
                <h3>{this.props.title}</h3>
                <p>{this.props.text}</p>
                <button>READ MORE</button>
            </li>
        )
    }
}