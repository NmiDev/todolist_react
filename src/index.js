// Imports
import './styles/reset.css';
import './styles/index.css';
import 'babel-polyfill';

const myArray = ['Pomme', 'Poire', 'Banana'];

const exposeMyArray = () => console.log(...myArray);

exposeMyArray();
