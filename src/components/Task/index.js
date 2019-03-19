/**
 * NPM imports
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Local imports
 */
import './task.scss';

/**
 * Code
 */
const Task = ({ label, done }) => {
  // Prepare class for task
  const className = classNames(
    'task',
    { 'task--done': done },
  );

  return (
    <li className={className}>
      <input className="task-input" type="checkbox" checked={done} />
      <p className="task-label">{label}</p>
    </li>
  );
};

Task.propTypes = {
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
};

/**
 * Export
 */
export default Task;
