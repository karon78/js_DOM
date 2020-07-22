'use strict';

import DataLoader from './DataLoader.js';

const dataLoader = new DataLoader();

dataLoader.addEventListener('load', ({ detail: data }) => {
  console.table(data);
});
dataLoader.addEventListener('error',
  ({ detail: error }) => { console.error(error); });

dataLoader.loadData('./persons.json'); // correct url
dataLoader.loadData('./wrong-path.json'); // incorrect url
