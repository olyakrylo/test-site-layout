import React from 'react'
import '../../../css/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { Link } from "react-router-dom"

export default class ItemList extends React.Component {

    menuItem(name, id, linkTo, clickFunc, cannotHide) {
        let itemClass = document.location.pathname === linkTo || cannotHide ? '' : 'header__menu_item_hidden'
        return (
            <li id={id} className={itemClass} onClick={clickFunc}>
                <Link to={linkTo} className='header__link'>{name}</Link>
            </li>
        )
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

        this.props.openOrCloseMenu();
    }

    render() {
        return(
            <ul className='header__menu animated fadeInDown' id='menu' >
                {this.menuItem('Home', 'menu-home', '/home', this.scrollToItem, true)}
                {this.menuItem('About', 'menu-about', '/home', this.scrollToItem, false)}
                {this.menuItem('Servicing', 'menu-services', '/home', this.scrollToItem, false)}
                {this.menuItem('Portfolio', 'menu-portfolio', '/home', this.scrollToItem, false)}
                {/* <li>Portfolio</li> */}
                <li>Blog</li>
                {this.menuItem('Contacts', 'menu-contacts', '/contacts', this.props.openOrCloseMenu, true)}
                <li>
                    <input 
                        id='search'
                        type='text'
                        className='header__search header__search_hidden'
                        placeholder='Search here...'></input>
                    <FontAwesomeIcon icon={faSearch} onClick={() => this.searchButtonClicked()}/>
                </li>
            </ul>
        )
    }
}