import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home/home';
import Confirmation from './components/pages/Confirmation/confirmation';
import NotFound from './components/pages/NotFound/notFound';

const Router = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/home' component={Home} />
      <Route path='/confirmation' component={Confirmation} />
      <Route path='*' component={NotFound} />
    </Switch>
  )
}

export default Router;