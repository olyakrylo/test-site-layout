import React from 'react'
import '../../../css/style.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { Link } from "react-router-dom"

export default class ItemList extends React.Component {

    menuItem(name, id, linkTo, clickFunc) {
        return (
            <li id={id} onClick={clickFunc} className='header__item'>
                <Link id={id + '-link'} to={linkTo} className='header__link'>{name}</Link>
            </li>
        )
    }

    // searchButtonClicked() {
    //     let button = document.getElementById('search')
    //     if (button.classList.contains('header__search_hidden')) {
    //         button.classList.remove('header__search_hidden')
    //     } else {
    //         // search
    //     }
    // }

    scrollToItem = e => {
        e.preventDefault();
        let elemId = e.currentTarget.id.substring(5)
            
        try {
            let elem = document.querySelector(`#${elemId}`);
            elem.scrollIntoView({behavior: "smooth", block: "start"});
        } catch (err) {
            console.log('go home')
            this.props.setScreen(elemId)
        }
        this.props.openOrCloseMenu();
    }

    render() {
        return(
            <ul className='header__menu animated fadeInDown' id='menu' >
                {this.menuItem('Home', 'menu-home', '/', this.scrollToItem)}
                {this.menuItem('About', 'menu-about', '/', this.scrollToItem)}
                {this.menuItem('Servicing', 'menu-services', '/', this.scrollToItem)}
                {this.menuItem('Portfolio', 'menu-portfolio', '/', this.scrollToItem)}
                {this.menuItem('Blog', 'menu-blog', '/', this.scrollToItem)}
                {this.menuItem('Contacts', 'menu-contacts', '/contacts', this.props.openOrCloseMenu)}
                {/* <li>
                    <input 
                        id='search'
                        type='text'
                        className='header__search header__search_hidden'
                        placeholder='Search here...'></input>
                    <FontAwesomeIcon icon={faSearch} onClick={() => this.searchButtonClicked()}/>
                </li> */}
            </ul>
        )
    }
}