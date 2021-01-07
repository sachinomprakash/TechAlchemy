import React, { Component } from 'react';
import { Route, Switch, Router, HashRouter } from 'react-router-dom';
import './App.scss';
import { createBrowserHistory } from 'history';
import BaseApp from './containers/BaseApp';
import { AxiosInterceptor } from './utils/interceptor/Interceptor';

export const history = createBrowserHistory();

interface Props { }
interface State { }

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    AxiosInterceptor();
  }

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <HashRouter>
              <Route path='/' component={BaseApp} />
            </HashRouter>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
