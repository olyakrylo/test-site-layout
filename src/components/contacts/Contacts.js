import React from 'react'
import Team from './Team/Team'
import ContactsBlock from './ContactsBlock/ContactsBlock'

export default class Contacts extends React.Component {
    componentDidMount() {
        document.getElementById('team').scrollIntoView({block: 'start'});

        window.addEventListener('scroll', this.props.arrowVisibility);
        this.props.arrowVisibility()
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.arrowVisibility);
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