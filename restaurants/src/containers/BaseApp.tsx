// importing core modules and pages
import React, { Component } from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';

// importing styles
import './BaseApp.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Landing } from '../features/pages';
import { Header, SideBar } from '../utils/common/components';

// Initializing the state and props
interface Props extends RouteComponentProps { }
interface State { }

class BaseApp extends Component<Props, State> {
    render() {
        return (
            <>
                <div className="row no-gutters">
                    <div className="col-2">
                        <SideBar />
                    </div>
                    <div className="col-10">
                        <Header/>
                        <Switch>
                            <Route exact path='/'>
                                <Redirect to='/landing' />
                            </Route>
                            <Route exact path="/landing" component={Landing} />
                        </Switch>
                    </div>
                </div>

            </>
        )
    }
}

export default BaseApp;