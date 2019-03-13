// Imports
import './styles/reset.css';
import './styles/index.css';
import 'babel-polyfill';

// Datas
const tasks = [
  {
    label: 'farine',
    done: true,
  },
  {
    label: 'chocolat',
    done: false,
  },
  {
    label: 'lait',
    done: true,
  },
];

// App
const app = {
  // Properties
  container: document.getElementById('app'), // App target
  count: 0, // Count undo task

  // Init
  init: () => {
    // Application loaded
    console.log('Ready Player One');

    // Loading form
    app.loadForm();
    // Loading task
    app.loadTasks();
  },

  // Method loadForm
  loadForm: () => {
    // Create form
    const form = document.createElement('form');
    form.setAttribute('id', 'form');
    form.addEventListener('submit', app.addTask);
    // Create input
    const input = document.createElement('input');
    input.setAttribute('id', 'input');
    input.placeholder = 'Ajoutez une tâche';
    // Add input
    form.appendChild(input);
    // Add form
    app.container.appendChild(form);
  },

  // Method loadTasks
  loadTasks: () => {
    // Title for the list
    const title = document.createElement('h1');
    const plural = app.count > 1 ? 's' : '';
    title.setAttribute('id', 'title');
    title.textContent = `${app.count} tâche${plural} en cours`;
    app.container.appendChild(title);
    // List of tasks
    const list = document.createElement('ul');
    list.setAttribute('id', 'list');
    // Item list with task
    tasks.forEach((task) => {
      const li = document.createElement('li');
      li.setAttribute('class', 'task');
      li.textContent = task.label;
      list.appendChild(li);
    });
    // Add list of tasks to the container
    app.container.appendChild(list);
  },

  // Method addTask
  addTask: (evt) => {
    // Stop default action
    evt.preventDefault();
    // Adding a task
    console.log('Tache en plus');
    // TODO:
  },
};

document.addEventListener('DOMContentLoaded', app.init);
