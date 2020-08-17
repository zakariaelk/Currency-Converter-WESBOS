import currencies from './currencies.js';
import { initApp } from './init.js';
import handleInput from './handlers.js';

const form = document.querySelector('.app form');

initApp();

/* 06. Set Event Handler for our form */

// TIP: Instead of listening to each Select and input field, we're setting an event listener on the type "input" on the whole form and we can track each target seperatly inside the handler callback function

form.addEventListener('input', handleInput);
