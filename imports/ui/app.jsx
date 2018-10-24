import React from 'react';
import Navigation from './components/nav';

export default ({ children }) => {
  return (
    <div className="app-container">
      <Navigation />
      {children}
    </div>
  );
};
