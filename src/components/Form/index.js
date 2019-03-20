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
    handleChange: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired,
  };

  handleSubmit = (event) => {
    // Prevent default
    event.preventDefault();
    // Require value from this.props
    const { addTask } = this.props;
    // Adding the new task to the State
    addTask();
  };

  render() {
    const { inputValue, handleChange } = this.props;
    return (
      <form id="form" onSubmit={this.handleSubmit}>
        <input
          id="form-input"
          type="text"
          placeholder="Ajouter une tâche"
          value={inputValue}
          onChange={handleChange}
        />
      </form>
    );
  }
}

/**
 * Export
 */
export default Form;
