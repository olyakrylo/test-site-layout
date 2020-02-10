import React from 'react'
import '../../css/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import { Link } from "react-router-dom"

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
            
        try {
            let elem = document.getElementById(elemId);
            elem.scrollIntoView({behavior: "smooth", block: "start"});
        } catch (err) {
            console.log(err)
        }

        this.openOrCloseMenu();
    }

    menuItem(name, id, linkTo, clickFunc, cannotHide) {
        let itemClass = document.location.pathname === linkTo || cannotHide ? '' : 'header__menu_item_hidden'
        return (
            <li id={id} className={itemClass} onClick={clickFunc}>
                <Link to={linkTo} className='header__link'>{name}</Link>
            </li>
        )
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
                    {this.menuItem('Home', 'menu-home', '/home', this.scrollToItem, true)}
                    {this.menuItem('About', 'menu-about', '/home', this.scrollToItem, false)}
                    {this.menuItem('Servicing', 'menu-services', '/home', this.scrollToItem, false)}
                    <li>Portfolio</li>
                    <li>Blog</li>
                    {this.menuItem('Contacts', 'menu-contacts', '/contacts', this.openOrCloseMenu, true)}
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