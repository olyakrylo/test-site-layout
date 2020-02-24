import React from 'react';

import Header from './components/Header/Header'
import Main from './components/main/Main'
import Contacts from './components/contacts/Contacts'
import Footer from './components/Footer/Footer'

import {
  Route,
  Switch,
//   Redirect,
  withRouter
} from "react-router-dom"

class App extends React.Component {
    render() {
      let { history } = this.props
      return (
          <div>
              <Header />
              <Switch>
                  <Route exact history={history} path='/' component={Main} />
                       {/* render={() => <Main page={this.state.showingHomePage} />} /> */}

                  <Route exact history={history} path='/contacts' component={Contacts} />
                  {/* <Redirect from='/' to='/home'/> */}
              </Switch>
              <Footer />
          </div>
      );
    }
}

export default withRouter(App);
