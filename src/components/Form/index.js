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
const Form = ({ handleSubmit, handleChange, inputValue }) => (
  <form id="form" onSubmit={handleSubmit}>
    <input
      id="form-input"
      type="text"
      placeholder="Ajouter une tâche"
      value={inputValue}
      onChange={handleChange}
    />
  </form>
);

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};

/**
 * Export
 */
export default Form;
