/**
 * NPM Imports
 */
import React from 'react';
import Moment from 'react-moment';

/**
 * Local Imports
 */
// Styles
import './counter.scss';

/**
 * Code
 */
const Counter = () => {
  const dateToFormat = '1976-04-19T12:59-0500';
  return (
    <div id="counter">
      <Moment format="dddd DD MMM" locale="fr">{dateToFormat}</Moment> - 0 tâche en cours
    </div>
  );
};

/**
 * Export
 */
export default Counter;
