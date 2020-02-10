import React from 'react';
import Main from './components/main/Main'
import Header from './components/Header/Header'
import Contacts from './components/contacts/Contacts'

import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom"

class App extends React.Component {

    // state = { showingHomePage: 'home' }

    // setShowingPage = page => {
    //     this.setState({ showingHomePage: page });
    // }

    render() {
      let { history } = this.props
      return (
          <div>
              <Header />
              <Switch>
                  <Route exact history={history} path='/home' component={Main} />
                       {/* render={() => <Main page={this.state.showingHomePage} />} /> */}

                  <Route exact history={history} path='/contacts' component={Contacts} />
                  <Redirect from='/' to='/home'/>
              </Switch>
          </div>
      );
    }
}

export default withRouter(App);
