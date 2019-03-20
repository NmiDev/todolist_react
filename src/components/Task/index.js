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
const Task = ({
  id,
  label,
  done,
  handleCheck,
}) => {
  // Prepare class for task
  const classList = classNames(
    'task',
    { 'task--done': done },
  );

  return (
    <li className={classList}>
      <input
        className="task-input"
        type="checkbox"
        checked={done}
        onChange={handleCheck(id)}
      />
      <p className="task-label">{label}</p>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  handleCheck: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default Task;
