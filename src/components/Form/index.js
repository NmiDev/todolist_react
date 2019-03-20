/**
 * NPM Imports
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local Imports
 */
// Styles
import './form.scss';

/**
 * Code
 */
class Form extends React.Component {
  static propTypes = {
    addTask: PropTypes.func.isRequired,
    updateInput: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired,
  };

  handleSubmit = (event) => {
    // Prevent default
    event.preventDefault();
    // Require value from this.props
    const { addTask } = this.props;
    // Adding the new task to the state
    addTask();
  };

  handleChange = (event) => {
    // Require value from this.props
    const { updateInput } = this.props;
    // Catch the value of input
    const { value } = event.target;
    // Update the state input value
    updateInput(value);
  };

  render() {
    const { inputValue } = this.props;
    return (
      <form id="form" onSubmit={this.handleSubmit}>
        <input
          id="form-input"
          type="text"
          placeholder="Ajouter une tâche"
          value={inputValue}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

/**
 * Export
 */
export default Form;
