import React from 'react'
import '../../../../css/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'

export default class Item extends React.Component {
    render() {
        return (
            <li className='infoblock animated fadeIn'>
                <div className='infoblock__icon'>
                    <FontAwesomeIcon icon={faMobileAlt} />
                </div>
                <h3 className='infoblock__title'>{this.props.title}</h3>
                <p className='infoblock__description'>{this.props.text}</p>
                <button className='infoblock__button'>READ MORE</button>
            </li>
        )
    }
}