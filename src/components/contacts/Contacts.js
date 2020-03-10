import React from 'react'
import Team from './Team/Team'
import ContactsBlock from './ContactsBlock/ContactsBlock'

export default class Contacts extends React.Component {
    componentDidMount() {
        document.getElementById('team').scrollIntoView({block: 'start'});

        for (let el of document.getElementsByClassName('header__link')) {
            el.classList.remove('header__link_colored');
        }
        document.getElementById('menu-contacts-link').classList.add('header__link_colored');

        window.addEventListener('scroll', this.props.arrowVisibility);
        this.props.arrowVisibility()
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.arrowVisibility);
        document.getElementById('menu-contacts-link').classList.remove('header__link_colored');
    }

    render() {
        return(
            <div className='contacts-container'>
                <Team />
                <ContactsBlock />
                {/* <div className='pop-up'>
                    <div className='pop-up__body'>
                        Heh
                    </div>
                </div> */}
            </div>
        )
    }
}