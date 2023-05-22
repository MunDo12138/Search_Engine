import React from 'react';
import { Routes as Switch, Route, Navigate  } from 'react-router-dom';

import { Results } from './';

export const Routes = () => (
  <div className="p-4">
    <Switch>
      <Route exact path="/" element={ <Navigate to="/search" /> } />
      <Route exact path="/news" element={<Results />} />
      <Route exact path="/search" element={<Results />} />
      <Route exact path="/images/search" element={<Results />} />
      <Route exact path="/videos/search" element={<Results />} />
    </Switch>
  </div>

);

export default Routes