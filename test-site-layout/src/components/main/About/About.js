import React from 'react'
import '../../../css/style.css'
import AboutItem from './AboutItem/AboutItem'
import { faGlobe, faUsers, faUserCog } from '@fortawesome/free-solid-svg-icons'

export default class About extends React.Component {
    render() {
        let infoText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
        let blockText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'

        return(
            <div className='about' id='about'>
                <div className='about__info'>
                    <h2>About Us</h2>
                    <p>{infoText}</p>
                </div>

                <ul className='about__content'>
                    <AboutItem title='Awesome Icons' blockText={blockText} icon={faGlobe} />
                    <AboutItem title='OnePage' blockText={blockText} icon={faUsers} />
                    <AboutItem title='Fully Responsive' blockText={blockText} icon={faUserCog} />
                </ul>
            </div>
        )
    }
}