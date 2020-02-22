import React from 'react'
import '../../../../css/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'

export default class ListElement extends React.Component {
    render() {
        return (
            <li>
                <div className='service__item'>
                    <FontAwesomeIcon icon={faMobileAlt} />
                </div>
                <h3>{this.props.title}</h3>
                <p>{this.props.text}</p>
                <button>READ MORE</button>
            </li>
        )
    }
}