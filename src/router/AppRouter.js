import React, {useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';

import {useDispatch, useSelector} from 'react-redux';
import {PublicRoute} from './PublicRoute';
import {Home} from '../components/home/home';


export const AppRouter = () => {

    const dispatch = useDispatch();



    return (
        <Router>
            <div>
                <Switch>

                    <PublicRoute
                        exact
                        path="/home"
                        component={Home}
                        isAuthenticated={true}
                    />



                    <Redirect to="/main"/>
                </Switch>
            </div>
        </Router>
    )
}
