import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
// import About from '../pages/About';
// import Contact from '../pages/Contact';
// import Projects from '../pages/Projects';
// import NoRoute from '../pages/NoRoute';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route  path="/about" component={About} />
      <Route  path="/contact" component={Contact} />
      <Route  path="/projects" component={Projects} /> */}
      {/* <Route component={NoRoute} /> */}
    </Switch>
  );
};

export default Routes;
