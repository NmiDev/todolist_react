/**
 * NPM Imports
 */
import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

/**
 * Local Imports
 */
// Styles
import './ephemeride.scss';

// Components
import Counter from './counter';

/**
 * Code
 */
const Ephemeride = ({ counter }) => {
  // Date format for moment.js
  const dateToFormat = '1976-04-19T12:59-0500';

  return (
    <div id="ephemeride">
      {/* Calendar, date of the day */}
      <Moment
        id="date"
        format="dddd DD MMM"
        locale="fr"
      >{dateToFormat}
      </Moment>
      {/* Counter task undone */}
      <Counter counter={counter} />
    </div>
  );
};

Ephemeride.propTypes = {
  counter: PropTypes.number.isRequired,
};

/**
 * Export
 */
export default Ephemeride;
