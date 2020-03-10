import React from 'react'
import '../../css/style.css'
import Home from './Home/Home'
import About from './About/About'
import Services from './Services/Services'
import Portfolio from './Portfolio/Portfolio'
import Price from './Price/Price'
import Blog from './Blog/Blog'

export default class Main extends React.PureComponent {
    componentDidMount() {
        document.getElementById(this.props.screenId).scrollIntoView({block: 'center', behavior: "smooth"});

        window.addEventListener('scroll', this.props.arrowVisibility);
        this.props.arrowVisibility()
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.arrowVisibility);
    }

    colorHeaderItems(id) {
        let element = document.getElementById(id);
        let headerElement = document.getElementById('menu-' + id + '-link');

        let targetPosition = {
            top: window.pageYOffset + element.getBoundingClientRect().top,
            left: window.pageXOffset + element.getBoundingClientRect().left,
            right: window.pageXOffset + element.getBoundingClientRect().right,
            bottom: window.pageYOffset + element.getBoundingClientRect().bottom
            },
            windowPosition = {
                top: window.pageYOffset,
                left: window.pageXOffset,
                right: window.pageXOffset + document.documentElement.clientWidth,
                bottom: window.pageYOffset + document.documentElement.clientHeight
            };

        let windowHeight = windowPosition.bottom - windowPosition.top;
      
        if ((targetPosition.bottom < windowPosition.bottom && 
            targetPosition.top > windowPosition.top) ||
            (windowPosition.bottom - targetPosition.top > 0.5 * windowHeight &&
            targetPosition.bottom - windowPosition.top > 0.5 * windowHeight)) {

            headerElement.classList.add('header__link_colored');
        } else {
            headerElement.classList.remove('header__link_colored');
        };
    }

    render() {
        return(
            <div className='main-container'>
                <Home colorHeaderItems={this.colorHeaderItems} />
                <About colorHeaderItems={this.colorHeaderItems} />
                <Services colorHeaderItems={this.colorHeaderItems} />
                <Portfolio colorHeaderItems={this.colorHeaderItems} />
                <Price colorHeaderItems={this.colorHeaderItems} />
                <Blog colorHeaderItems={this.colorHeaderItems} />
            </div>
        )
    }
}