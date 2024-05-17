// let's go!
import React from 'react';
import { createRoot } from 'react-dom/client';
import StorePicker from './components/StorePicker';
import App from "./components/App";
import "./css/style.css";


// Select the DOM element where you want to render the React component
const container = document.querySelector('#main');
const root = createRoot(container);

// Use the new root to render your component
root.render(<App/>);
