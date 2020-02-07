import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

export default class Header extends React.Component {

    barClicked = () => {
        let menu = document.getElementById('menu');
        let crossItem = document.getElementById('cross');
        let burgerItem = document.getElementById('burger');
        let showClass = 'header__bar';
        let hiddenClass = 'header__bar_hidden';
        if (menu.classList.contains('header__menu_show')) {
            menu.classList.remove('header__menu_show')

            crossItem.classList.replace(showClass, hiddenClass)
            burgerItem.classList.replace(hiddenClass, showClass)

            // crossItem.classList.replace('animated', 'fadeIn', 'fadeOut')
            // burgerItem.classList.replace('animated', 'fadeOut', 'fadeIn')
        } else {
            menu.classList.add('header__menu_show');
            menu.classList.add('animated', 'slideInDown')

            crossItem.classList.replace(hiddenClass, showClass)
            burgerItem.classList.replace(showClass, hiddenClass)

            burgerItem.classList.add('animated', 'fadeIn')
            crossItem.classList.add('animated', 'fadeIn')
            
        }
        
    }

    setMenuIcon() {
        let menu = document.getElementById('menu');
        return menu.classList.contains('header__menu_show')
    }

    render() {
        // let icon = document.getElementById('menu').contains('header__menu_show') ? faBars : faTimes

        return(
            <div className='header' id='header'>
                <div className='header__head'>
                    <p>Your Logo</p>
                    <FontAwesomeIcon 
                        id='burger' 
                        className='header__bar'
                        icon={faBars} 
                        onClick={() => this.barClicked()} />
                    <FontAwesomeIcon 
                        id='cross' 
                        className='header__bar_hidden' 
                        icon={faTimes} 
                        onClick={() => this.barClicked()} />
                </div>
                <ul className='header__menu' id='menu' >
                    <li>Home</li>
                    <li>About</li>
                    <li>Servicing</li>
                    <li>Portfolio</li>
                    <li>Blog</li>
                    <li>Contact us</li> 
                    <li>
                        <FontAwesomeIcon icon={faSearch} />
                    </li>
                </ul>
            </div>
        );
    }
}