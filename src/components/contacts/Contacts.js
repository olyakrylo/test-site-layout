import React from 'react'
import Team from './Team/Team'
import ContactsBlock from './ContactsBlock/ContactsBlock'

export default class Contacts extends React.Component {
    componentDidMount() {
        document.getElementById('team').scrollIntoView({block: 'start'});
    }

    render() {
        return(
            <div className='contacts-container'>
                <Team />
                <ContactsBlock />
            </div>
        )
    }
}