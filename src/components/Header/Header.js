import React from 'react'
import '../../css/style.css'
import ItemList from './ItemList/ItemList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

export default class Header extends React.Component {

    openOrCloseMenu = () => {
        document.getElementById('menu').classList.toggle('header__menu_show');

        document.getElementById('burger').classList.toggle('header__bar_hidden');
        document.getElementById('cross').classList.toggle('header__bar_hidden');
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
                {/* <div id='item-list' className='item-list animated slideInDown' style={{backgroundColor: 'red'}}> */}
                    <ItemList openOrCloseMenu={this.openOrCloseMenu} setScreen={this.props.setScreen}/>
                {/* </div> */}
            </div>
        );
    }
}