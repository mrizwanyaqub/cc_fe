import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = ({ label, value, onChange, error }) => {
  return (
    <div className="inputContainer">
      <span className="label">{label}</span>
      <input
        type="text"
        className="inputElem"
        value={value}
        onChange={onChange}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

Input.defaultProps = {
  value: '',
  onChange: null,
  error: null,
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
};

export default React.memo(Input);
