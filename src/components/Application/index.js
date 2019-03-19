/**
 * NPM imports
 */
import React from 'react';

/**
 * Local imports
 */
// Components
import Form from 'Components/Form';
import Counter from 'Components/Counter';
import List from 'Components/List';
// Styles
import './application.scss';

/**
 * Code
 */
const Application = () => (
  <div id="application">
    {/* Form component */}
    <Form />
    {/* Counter component */}
    <Counter />
    {/* List component */}
    <List />
  </div>
);

/**
 * Exports
 */
export default Application;
