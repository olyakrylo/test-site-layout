import React from 'react'
import '../../../css/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

export default class Home extends React.Component {
    componentDidMount() {
        window.addEventListener('scroll', this.props.colorHeaderItems.bind(null, 'home'));
        this.props.colorHeaderItems('home');
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.colorHeaderItems.bind(null, 'home'));
    }

    scrollToAbout() {
        let about = document.getElementById('about')

        about.scrollIntoView({behavior: "smooth"})
    }

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
                        onClick={this.scrollToAbout} />
                </div>
            </div>
        );
    }
}