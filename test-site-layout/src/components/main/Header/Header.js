import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

export default class Header extends React.Component {

    openOrCloseMenu = () => {
        let menu = document.getElementById('menu');
        let crossItem = document.getElementById('cross');
        let burgerItem = document.getElementById('burger');
        let showClass = 'header__bar';
        let hiddenClass = 'header__bar_hidden';
        if (menu.classList.contains('header__menu_show')) {
            menu.classList.remove('header__menu_show')

            crossItem.classList.replace(showClass, hiddenClass)
            burgerItem.classList.replace(hiddenClass, showClass)
        } else {
            menu.classList.add('header__menu_show');
            menu.classList.add('animated', 'slideInDown')

            crossItem.classList.replace(hiddenClass, showClass)
            burgerItem.classList.replace(showClass, hiddenClass)

            burgerItem.classList.add('animated', 'fadeIn')
            crossItem.classList.add('animated', 'fadeIn')
        }
        
    }

    searchButtonClicked() {
        let button = document.getElementById('search')
        if (button.classList.contains('header__search_hidden')) {
            button.classList.remove('header__search_hidden')
        } else {
            // search
        }
    }

    scrollToItem = e => {
        e.preventDefault();
        // let elemId = e.currentTarget.id.toLowerCase();
        let elemId = e.currentTarget.id.substring(5)
        let elem = document.getElementById(elemId);
        elem.scrollIntoView();

        this.openOrCloseMenu()
    }

    render() {
        return(
            <div className='header' id='header'>
                <div className='header__head'>
                    <p>Your Logo</p>
                    <FontAwesomeIcon 
                        id='burger' 
                        className='header__bar'
                        icon={faBars} 
                        onClick={() => this.openOrCloseMenu()} />
                    <FontAwesomeIcon 
                        id='cross' 
                        className='header__bar_hidden' 
                        icon={faTimes} 
                        onClick={() => this.openOrCloseMenu()} />
                </div>
                <ul className='header__menu' id='menu' >
                    <li id='menu-home' onClick={this.scrollToItem}>Home</li>
                    <li id='menu-about' onClick={this.scrollToItem}>About</li>
                    <li id='menu-services' onClick={this.scrollToItem}>Servicing</li>
                    <li>Portfolio</li>
                    <li>Blog</li>
                    <li>Contact us</li> 
                    <li>
                        <input 
                            id='search'
                            type='text'
                            className='header__search header__search_hidden'
                            placeholder='Search here...'></input>
                        <FontAwesomeIcon icon={faSearch} onClick={() => this.searchButtonClicked()}/>
                    </li>
                </ul>
            </div>
        );
    }
}