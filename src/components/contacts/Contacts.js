import React from 'react';
import Team from './Team';
import Feedback from './Feedback';

export default class Contacts extends React.Component {
    componentDidMount() {
        document.querySelector('#team').scrollIntoView({block: 'start'});

        for (let el of document.querySelectorAll('.header__link')) {
            el.classList.remove('header__link_colored');
        }
        document.querySelector('#menu-contacts-link').classList.add('header__link_colored');

        window.addEventListener('scroll', this.props.arrowVisibility);
        this.props.arrowVisibility()
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.arrowVisibility);
        document.querySelector('#menu-contacts-link').classList.remove('header__link_colored');
    }

    render() {
        return(
            <div className='contacts-container'>
                <Team />
                <Feedback />
            </div>
        )
    }
}