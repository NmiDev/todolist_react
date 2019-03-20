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
    input: '',
  };

  /**
   * Actions
   */
  handleCheck = id => () => {
    // Require value from state
    const { tasks } = this.state;
    // Update tasks
    const updateTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          id: task.id,
          label: task.label,
          done: !task.done,
        };
      }
      return task;
    });
    // New state value for tasks
    const newState = {
      tasks: [
        ...updateTasks,
      ],
    };
    // Set the state
    this.setState(newState);
  };

  handleChange = (event) => {
    // Prevent default
    event.preventDefault();
    // Catch and clean the value of input
    const inputValue = event.target.value;
    // Set the state
    this.setState({
      input: inputValue,
    });
  };

  handleSubmit = (event) => {
    // Prevent default
    event.preventDefault();
    // Needed values from the state
    const { tasks, input } = this.state;
    // Catch the new label
    const newLabel = input.trim();
    // Generate the next id
    const currentId = tasks.map(task => (task.id));
    const nextId = Math.max(...currentId) + 1;
    // New task object
    const newTask = {
      id: nextId,
      label: newLabel,
      done: false,
    };

    // Set the state and clean the input
    this.setState({
      tasks: [
        ...tasks,
        newTask,
      ],
      input: '',
    });
  };

  /**
  * Render
  */
  render() {
    // Data from the state
    const { tasks, input } = this.state;
    // Check the value of count for Ephemeride props
    const count = tasks.filter(task => task.done === false).length;

    return (
      <div id="application">
        {/* Form component */}
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          inputValue={input}
        />
        {/* Counter component */}
        <Ephemeride
          counter={count}
        />
        {/* List component */}
        <List
          tasks={tasks}
          handleCheck={this.handleCheck}
        />
      </div>
    );
  }
}

/**
 * Exports
 */
export default Application;
