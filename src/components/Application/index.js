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
    // Set the state
    this.setState({
      tasks: updateTasks,
    });
  };

  updateInput = (value) => {
    // Set the state
    this.setState({
      input: value,
    });
  };

  addTask = () => {
    // Needed values from the state
    const { tasks, input } = this.state;
    // Generate the next id
    const currentId = tasks.map(task => (task.id));
    const nextId = Math.max(...currentId) + 1;
    // Catch and clean the next label
    const nextLabel = input.trim();
    // New task definition
    const newTask = {
      id: nextId,
      label: nextLabel,
      done: false,
    };
    // New tasks value
    const newTasks = [
      newTask,
      ...tasks,
    ];
    // Set the state and clean the input
    this.setState({
      tasks: newTasks,
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
          addTask={this.addTask}
          updateInput={this.updateInput}
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
