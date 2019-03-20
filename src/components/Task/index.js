/**
 * NPM imports
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FaTrashAlt } from 'react-icons/fa';


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
  handleDelete,
}) => {
  // Prepare class for task
  const classList = classNames(
    'task',
    { 'task--done': done },
  );

  return (
    <li className={classList}>
      <div className="task-container">
        <input
          className="task-container-input"
          type="checkbox"
          checked={done}
          onChange={handleCheck(id)}
        />
        <p className="task-container-label">{label}</p>
      </div>
      <div className="task-options">
        <FaTrashAlt
          className="task-options-delete"
          onClick={handleDelete(id)}
        />
      </div>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  handleCheck: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default Task;
