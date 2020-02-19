import React from 'react'
import '../../css/style.css'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                <p>All rights Reserved <FontAwesomeIcon icon={faCopyright} /> 2017</p>
            </div>
        )
    }
}