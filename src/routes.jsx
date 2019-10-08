import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home/home';
import Users from './components/pages/Users/users';
import Companies from './components/pages/Companies/companies';
import Cities from './components/pages/Cities/cities';
import Countries from './components/pages/Countries/countries';
import NotFound from './components/pages/NotFound/notFound';

const Router = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/home' component={Home} />
      <Route path='/users' component={Users} />
      <Route path='/companies' component={Companies} />
      <Route path='/cities' component={Cities} />
      <Route path='/countries' component={Countries} />
      <Route path='*' component={NotFound} />
    </Switch>
  )
}

export default Router;