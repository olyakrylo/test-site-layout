import React from 'react'
import './main.css'
import Header from './Header/Header'
import Home from './Home/Home'
import AboutUs from './AboutUs/AboutUs'
import Services from './Services/Services'

export default class Main extends React.Component {
    render() {
        return(
            <div className='main-container'>
                <Header />
                <Home />
                <AboutUs />
                <Services />
            </div>
        )
    }
}