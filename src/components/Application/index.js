/**
 * NPM imports
 */
import React from 'react';

/**
 * Local imports
 */
// Styles
import './application.scss';
// Components
import Form from 'Components/Form';
import Ephemeride from 'Components/Ephemeride';
import List from 'Components/List';
// Data
import data from '../../data/tasks';

/**
 * Code
 */
class Application extends React.Component {
  /**
   * State
   */
  state = {
    tasks: data,
  };

  /**
   * Actions
   */
  addTask = (e) => {
    // Prevent default
    e.preventDefault();
    // Needed values from the state
    const { tasks } = this.state;
    // Catch and clean the new task value
    let newLabel = e.target.firstChild.value;
    newLabel = newLabel.trim();
    // Generate the next id
    const currentId = tasks.map(task => (task.id));
    const nextId = Math.max(...currentId) + 1;

    // Set the state
    this.setState({
      tasks: [
        ...tasks,
        {
          id: nextId,
          label: newLabel,
          done: false,
        },
      ],
    });

    // Clear the input
  };

  /**
  * Render
  */
  render() {
    // Data from the state
    const { tasks } = this.state;
    // Check the value of count for Ephemeride props
    const count = tasks.filter(task => task.done === false).length;

    return (
      <div id="application">
        {/* Form component */}
        <Form handleSubmit={this.addTask} />
        {/* Counter component */}
        <Ephemeride counter={count} />
        {/* List component */}
        <List tasks={tasks} />
      </div>
    );
  }
}

/**
 * Exports
 */
export default Application;
