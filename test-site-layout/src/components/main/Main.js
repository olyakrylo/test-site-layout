import React from 'react'
import '../../css/style.css'
// import Header from './Header/Header'
import Home from './Home/Home'
import About from './About/About'
import Services from './Services/Services'
import Portfolio from './Portfolio/Portfolio'

export default class Main extends React.PureComponent {

    // componentDidMount() {
    //     let pageElem = document.getElementById(this.props.page)
    //     console.log(this.props.page)
    //     pageElem.scrollIntoView({behavior: "smooth", block: "start"})
    // }

    render() {
        return(
            <div className='main-container'>
                <Home />
                <About />
                <Services />
                <Portfolio />
            </div>
        )
    }
}