import React from 'react'
import './header.css'

export default class Header extends React.Component {
    render() {
        return(
            <div className='header'>
                <p>Your Logo</p>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Servicing</li>
                    <li>Portfolio</li>
                    <li>Blog</li>
                    <li>Contact us</li> 
                    <li>Search</li>
                </ul>
            </div>
        );
    }
}