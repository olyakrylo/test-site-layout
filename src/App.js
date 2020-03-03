import React from 'react';

import Header from './components/Header/Header'
import Main from './components/main/Main'
import Contacts from './components/contacts/Contacts'
import Footer from './components/Footer/Footer'

import {
  Route,
  Switch,
//   Redirect,
  // withRouter, 
  // Router
} from "react-router-dom"

class App extends React.Component {

    render() {
      // let { history } = this.props
      return (
          <div>
              <Header />
              <Switch>
              {/* <Router history={history}> */}
              {/* <Router> */}
                  <Route exact path='/' component={Main} />
                  <Route path='/contacts' component={Contacts} />
              {/* </Router> */}
              </Switch>
              <Footer />
          </div>
      );
    }
}

export default App;
// export default withRouter(App);
