import React from 'react';
import PropTypes from 'prop-types';

import styles from './loader.scss';

const Loader = ({ show }) => (
  <div className={`${styles.loader} ${show ? '' : styles.hidden}`}>
    <div className={`${styles.animation} lds-ellipsis`}>
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

Loader.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default Loader;
