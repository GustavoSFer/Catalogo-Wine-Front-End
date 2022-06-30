import React from 'react';
import PropType from 'prop-types';
import ContextWine from './ContextWine';

function ProvideCatalogo({ children }) {
  const context = {};
  return (
    <ContextWine.Provider value={context}>
      {children}
    </ContextWine.Provider>
  );
}

ProvideCatalogo.defaultProps = { children: '' };
ProvideCatalogo.propTypes = {
  children: PropType.node,
};

export default ProvideCatalogo;
