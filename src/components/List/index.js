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
const List = ({ tasks }) => (
  <ul id="list">
    {tasks.map(task => (
      <Task {...task} key={task.id} />
    ))}
  </ul>
);

List.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
    done: PropTypes.bool,
  })).isRequired,
};

/**
 * Export
 */
export default List;
