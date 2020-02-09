import React from 'react'
import '../../../css/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

export default class Header extends React.Component {

    openOrCloseMenu = () => {
        let menu = document.getElementById('menu');
        let crossItem = document.getElementById('cross');
        let burgerItem = document.getElementById('burger');
        let menuShowClass = 'header__menu_show';
        let barHiddenClass = 'header__bar_hidden';
        
        if (menu.classList.contains(menuShowClass)) {
            menu.classList.remove(menuShowClass)

            burgerItem.classList.remove(barHiddenClass);
            crossItem.classList.add(barHiddenClass);
        } else {
            menu.classList.add(menuShowClass);

            crossItem.classList.remove(barHiddenClass);
            burgerItem.classList.add(barHiddenClass);

            // document.getElementById('header').classList.add('header__open')
            // setTimeout(document.getElementById('header').classList.remove('header__open'), 100)
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
        let elemId = e.currentTarget.id.substring(5)
        let elem = document.getElementById(elemId);
        elem.scrollIntoView();

        elem.classList.add('animated', 'slideInUp');

        setTimeout(() => elem.classList.remove('animated', 'slideInUp'), 1000)

        this.openOrCloseMenu();
    }

    render() {
        return(
            <div className='header' id='header'>
                <div className='header__head'>
                    <p>Your Logo</p>
                    <FontAwesomeIcon 
                        id='burger' 
                        className='header__bar animated fadeIn'
                        icon={faBars} 
                        onClick={() => this.openOrCloseMenu()} />
                    <FontAwesomeIcon 
                        id='cross' 
                        className='header__bar header__bar_hidden animated fadeIn' 
                        icon={faTimes} 
                        onClick={() => this.openOrCloseMenu()} />
                </div>
                <ul className='header__menu animated fadeInDown' id='menu' >
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