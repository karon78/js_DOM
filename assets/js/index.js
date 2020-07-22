'use strict';

import DataLoader from './DataLoader.js';

const dataLoader = new DataLoader();

dataLoader.addEventListener('load', ({ detail: data }) => {
  console.table(data);
});
dataLoader.addEventListener('error',
  ({ detail: error }) => { console.error(error); });

dataLoader.src = './persons.json';
