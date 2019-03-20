/**
 * NPM Imports
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local Imports
 */
// Styles
import './list.scss';

// Components
import Task from 'Components/Task';

/**
 * Code
 */
const List = ({ tasks, handleCheck, handleDelete }) => (
  <ul id="list">
    {tasks.map(task => (
      <Task
        {...task}
        key={task.id}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    ))}
  </ul>
);

List.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
    done: PropTypes.bool,
  })).isRequired,
  handleCheck: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default List;
