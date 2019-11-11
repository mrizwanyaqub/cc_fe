import React from 'react';
import './Loader.css';

const Loader = () => (
  <div className="loaderContainer">
    <div className="loader">
      <div className="animation lds-ellipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  </div>
);

export default Loader;
