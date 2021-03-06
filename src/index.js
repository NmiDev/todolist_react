/**
 * NPM imports
 */
import React from 'react';
import { render } from 'react-dom';

/**
 * Local imports
 */
import Application from 'Components/Application';

/**
 * Code
 */
const rootComponent = (
  <Application />
);

const targetNode = document.getElementById('root');

document.addEventListener('DOMContentLoaded', () => {
  render(rootComponent, targetNode);
});

/**
 * Export
 */

// // App
// const app = {
//   // Properties
//   container: document.getElementById('app'), // App target

//   // Init
//   init: () => {
//     // Application loaded
//     console.log('Ready Player One');

//     // Reset container content
//     app.container.innerHTML = '';

//     // Loading form
//     app.loadForm();
//     // Loading counter
//     app.loadCounter();
//     // Loading list
//     app.loadList();
//   },

//   // Method loadForm
//   loadForm: () => {
//     // Create form
//     const form = document.createElement('form');
//     form.setAttribute('id', 'form');
//     form.addEventListener('submit', app.addTask);
//     // Create input
//     const input = document.createElement('input');
//     input.setAttribute('id', 'input');
//     input.placeholder = 'Ajoutez une tâche';
//     // Add input
//     form.appendChild(input);
//     // Add form
//     app.container.appendChild(form);
//   },

//   // Method loadCounter
//   loadCounter: () => {
//     // Create counter
//     const counter = document.createElement('div');
//     counter.setAttribute('id', 'counter');
//     // Counter value
//     const undoneTasks = tasks.filter(task => !task.done);
//     const count = undoneTasks.length;
//     const plural = count > 1 ? 's' : '';
//     counter.textContent = `${count} tâche${plural} en cours`;
//     // Add counter to the container
//     app.container.appendChild(counter);
//   },

//   // Method loadList
//   loadList: () => {
//     // List of tasks
//     const list = document.createElement('ul');
//     list.setAttribute('id', 'list');
//     // Add list of tasks to the container
//     app.container.appendChild(list);
//     // Item list with task
//     tasks.forEach(app.loadTask);
//   },

//   // Method loadTask
//   loadTask: (task) => {
//     // Target list
//     const list = document.getElementById('list');
//     // Create li
//     const li = document.createElement('li');
//     // Set class for task li
//     li.setAttribute('class', 'task');
//     if (task.done) {
//       li.classList.add('task--done');
//     }
//     // Task label
//     const label = document.createElement('span');
//     label.textContent = task.label;
//     label.setAttribute('class', 'task-label');
//     // Task checkbox
//     const checkbox = document.createElement('input');
//     checkbox.type = 'checkbox';
//     checkbox.checked = task.done;

//     // Handler for check task
//     checkbox.addEventListener('change', () => {
//       // eslint-disable-next-line no-param-reassign
//       task.done = !task.done;
//       app.init();
//     });

//     // Add task items
//     li.appendChild(checkbox);
//     li.appendChild(label);

//     // Add task to the list
//     list.appendChild(li);
//   },

//   // Method addTask
//   addTask: (evt) => {
//     // Stop default action
//     evt.preventDefault();
//     // Catch and clean the new label
//     let newLabel = evt.target.input.value;
//     newLabel = newLabel.trim();
//     // Empty label
//     if (newLabel === '') {
//       // TODO: empty label task
//     }
//     // Adding newTask
//     tasks.push({
//       label: newLabel,
//       done: false,
//     });
//     // Reload app
//     app.init();
//   },
// };

// document.addEventListener('DOMContentLoaded', app.init);
