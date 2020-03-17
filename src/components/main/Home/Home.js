import React from 'react'
import '../../../css/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Buttons from './Buttons/Buttons'

export default class Home extends React.Component {
    componentDidMount() {
        window.addEventListener('scroll', this.props.colorHeaderItems);
        this.props.colorHeaderItems();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.colorHeaderItems);
    }

    scrollToItem(id) {
        document.querySelector(id).scrollIntoView({behavior: "smooth", block: 'start'});
    }

    render() {
        return (
            <div className='home' id='home'>
                <div className="home__content">
                    <h1 className='home__title'>Web development project</h1>
                    <h4 className='home__description'>Very suitable to support all web development projects</h4>

                    <Buttons scrollToItem={this.scrollToItem} />

                    <FontAwesomeIcon 
                        className="home__angle" 
                        icon={faAngleDown}
                        onClick={() => this.scrollToItem('#about')} />
                </div>
            </div>
        );
    }
}