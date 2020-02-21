import React from 'react'
import Team from './Team/Team'
import ContactsBlock from './ContactsBlock/ContactsBlock'

export default class Contacts extends React.Component {
    render() {
        return(
            <div className='contacts-container'>
                <Team />
                <ContactsBlock />
            </div>
        )
    }
}