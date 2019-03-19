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
import tasks from '../../data/tasks';

/**
 * Code
 */
class Application extends React.Component {
  state = {

  };

  render() {
    // Check the value of count for Ephemeride props
    const count = tasks.filter(task => task.done === false).length;

    return (
      <div id="application">
        {/* Form component */}
        <Form />
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
