import React from 'react'
import '../../css/style.css'
import ItemList from './ItemList/ItemList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

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
                <ItemList openOrCloseMenu={this.openOrCloseMenu} setScreen={this.props.setScreen}/>
            </div>
        );
    }
}