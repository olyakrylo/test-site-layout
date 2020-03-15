import React from 'react'
import '../../../css/style.css'
import AboutItem from './AboutItem/AboutItem'
import Title from '../../lib/title/Title'
import { faGlobe, faUsers, faUserCog } from '@fortawesome/free-solid-svg-icons'

export default class About extends React.Component {
    componentDidMount() {
        window.addEventListener('scroll', this.props.colorHeaderItems);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.colorHeaderItems);
    }

    render() {
        let infoText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam,`
        let blockText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                        sed do eiusmod tempor`

        return(
            <div className='about' id='about'>
                <Title addClass={'about__info'} name={'About Us'} description={infoText} />

                <ul className='about__content'>
                    <AboutItem title='Awesome Icons' blockText={blockText} icon={faGlobe} />
                    <AboutItem title='OnePage' blockText={blockText} icon={faUsers} />
                    <AboutItem title='Fully Responsive' blockText={blockText} icon={faUserCog} />
                </ul>
            </div>
        )
    }
}