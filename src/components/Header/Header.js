import React from 'react';
import '../../css/style.css';
import ItemList from './ItemList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default class Header extends React.Component {

    openOrCloseMenu = () => {
        if (document.documentElement.clientWidth > 900) return;
        
        let bar = document.querySelector('.header__bar_hidden');
        let header = document.querySelector('.header');
        header.style.height = bar.id === 'cross' ? '290px' : '70px';
        document.querySelector('#menu').classList.toggle('header__menu_show');
        document.querySelector('#burger').classList.toggle('header__bar_hidden');
        document.querySelector('#cross').classList.toggle('header__bar_hidden');
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