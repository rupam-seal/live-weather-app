import React from 'react';
import Theme from './Theme';

const Topbar = () => {
  return (
    <div className="topbar">
      <span href="" className="topbar__logo">
        Live<span className="topbar__logo-highlight">Weather</span>
      </span>
      <Theme />
    </div>
  );
};

export default Topbar;
