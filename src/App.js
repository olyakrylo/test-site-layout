import React from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import {
  Route,
  Switch
} from "react-router-dom";

class App extends React.Component {

    state = {
      screenId: 'home'
    };

    setScreen = screen => {
      this.setState({ screenId: screen })
    } 

    arrowVisibility() {
        let element = document.querySelector('#home') || document.querySelector('#team')

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
      
        if (targetPosition.bottom > windowPosition.top && 
            targetPosition.top < windowPosition.bottom) { 

            document.querySelector('#up-arrow').style.display = 'none';
        } else {
            document.querySelector('#up-arrow').style.display = 'flex';
        };
    }

    render() {
      let scrollUp = () => document.querySelector('#root').scrollIntoView({behavior: 'smooth', block: "start"});
      return (
          <div>
              <Header setScreen={this.setScreen}/>
              <Switch>
                  <Route exact path='/' render={() => <Main 
                                                      screenId={this.state.screenId} 
                                                      arrowVisibility={this.arrowVisibility} />} />
                  <Route path='/contacts' render={() => <Contacts arrowVisibility={this.arrowVisibility} />} />
              </Switch>
              <div className="up-arrow animated bounceInUp" id='up-arrow'
                    onClick={scrollUp}>
                  <FontAwesomeIcon icon={faArrowUp} />
              </div>
              <Footer />
          </div>
      );
    }
}

export default App;
