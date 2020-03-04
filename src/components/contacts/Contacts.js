import React from 'react'
import Team from './Team/Team'
import ContactsBlock from './ContactsBlock/ContactsBlock'

export default class Contacts extends React.Component {
    componentDidMount() {
        document.getElementById('team').scrollIntoView({block: 'start'});

        window.addEventListener('scroll', this.props.visible);
        this.props.visible()
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.visible);
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