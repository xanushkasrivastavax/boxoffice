import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        This is our home page
      </Route>
      <Route exact path="/starred">
        This is our starred page
      </Route>
      <Route>This is 404 page</Route>
    </Switch>
  );
}

export default App;
