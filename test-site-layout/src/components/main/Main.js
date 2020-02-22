import React from 'react'
import '../../css/style.css'
// import Header from './Header/Header'
import Home from './Home/Home'
import About from './About/About'
import Services from './Services/Services'
import Portfolio from './Portfolio/Portfolio'
import Price from './Price/Price'
import Blog from './Blog/Blog'

export default class Main extends React.PureComponent {
    render() {
        return(
            <div className='main-container'>
                <Home />
                <About />
                <Services />
                <Portfolio />
                <Price />
                <Blog />
            </div>
        )
    }
}