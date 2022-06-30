import React from 'react';
import PropTypes from 'prop-types';

function ButtonOnClick({ children, disabled, onClick }) {
  return (
    <button
      type="submit"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

ButtonOnClick.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonOnClick;
