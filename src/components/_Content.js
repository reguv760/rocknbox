import React from 'react';
import { Switch, Route } from 'react-router-dom'; //import Switch + Route functions:::

const Content = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/live" component={Live} />
      <Route path="/photos" component={Photos} />
      <Route component={NotFound} />
    </Switch>
  );
};
