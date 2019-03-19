/**
 * NPM imports
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local imports
 */
import './task.scss';

/**
 * Code
 */
const Task = ({ id, label, done }) => {
  console.log('task');

  return (
    <li className="task">
      <input className="task-input" type="checkbox" />
      <p className="task-label">{label}</p>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
};

/**
 * Export
 */
export default Task;
