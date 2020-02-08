import React from 'react'
import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

export default class Home extends React.Component {
    render() {
        return (
            <div className='home' id='home'>
                <div className="home__content">
                    <h1>Web development project</h1>
                    <h4>Very suitable to support all web development projects</h4>
                    <div className="home__buttons">
                        <button>OUR SERVICES</button>
                        <button>HIRE IS NOW</button>
                    </div>
                    <FontAwesomeIcon 
                        className="home__angle" 
                        icon={faAngleDown}
                        onClick={() => document.getElementById('about').scrollIntoView()} />
                </div>
            </div>
        );
    }
}