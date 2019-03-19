/**
 * NPM imports
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local imports
 */

/**
 * Code
 */
const Counter = ({ counter }) => {
  // Message
  let message;
  switch (counter) {
    case 0:
      message = 'Aucune tâche en cours';
      break;
    case 1:
      message = `${counter} tâche en cours`;
      break;
    default:
      message = `${counter} tâches en cours`;
  }

  return (
    <div id="counter">{message}</div>
  );
};

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
};

/**
 * Export
 */
export default Counter;
