import React from 'react'
import '../../css/style.css'
import Header from './Header/Header'
import Home from './Home/Home'
import About from './About/About'
import Services from './Services/Services'

export default class Main extends React.Component {
    render() {
        return(
            <div className='main-container'>
                <Header />
                <Home />
                <About />
                <Services />
            </div>
        )
    }
}