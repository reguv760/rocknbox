import React from 'react';
import { Switch, Route } from 'react-router-dom'; //import Switch + Route functions:::

import Privacy from './../pages/privacy.js';

const FooterContent = () => {
  return (
    <Switch>
      <Route path="/privacy" component={Privacy} />
      {/* <Route path='/' component={}/>
      <Route path='/' component={}/> */}
    </Switch>
  );
};

export default FooterContent;
