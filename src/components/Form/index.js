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
const Form = ({ handleSubmit }) => {
  console.log();

  return (
    <form id="form" onSubmit={handleSubmit}>
      <input id="form-input" type="text" placeholder="Ajouter une tâche" />
    </form>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default Form;
