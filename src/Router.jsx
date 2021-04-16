import React from 'react';
import { Router, Switch,Route } from 'react-router';
import history from './utils/history';
import {ROUTERS} from './constants/router'
import DefaultLayout from './components/DefaultLayout';
import Admin from './pages/Admin';
import Company from './components/content/AdminContent/Company';
import School from './components/content/AdminContent/School';
import Login from './pages/Login';
import TestTable from './components/content/AdminContent/Testtable';
function BrowserRouter(props) {
    return (
       <Router history={history}>
           <Switch>    
               <DefaultLayout
                    exact
                    path={ROUTERS.INFORMATION}
                    component = {Admin}
               />             
               <DefaultLayout
                    exact
                    path={ROUTERS.COMPANY_LIST}
                    component = {Company}
               />
               <DefaultLayout
                    exact
                    path={ROUTERS.SCHOOL_LIST}
                    component = {School}
               />
               <Route exact 
                    path={ROUTERS.LOGIN}
                    component = {Login} />
               <Route exact 
                    path={ROUTERS.TABLE}
                    component = {TestTable} />
           </Switch>
       </Router>
    );
}

export default BrowserRouter;