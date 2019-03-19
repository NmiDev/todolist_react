/**
 * NPM Imports
 */
import React from 'react';

/**
 * Local Imports
 */
// Styles
import './list.scss';

// Components
import Task from 'Components/Task';

// Data
import tasks from '../../data/tasks';

/**
 * Code
 */
const List = () => (
  <ul id="list">
    {tasks.map(task => (
      <Task {...task} key={task.id} />
    ))}
  </ul>
);

/**
 * Export
 */
export default List;
