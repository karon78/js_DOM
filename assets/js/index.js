"use strict";

import DataLoader from "./DataLoader.js";

const dataLoader = new DataLoader();

dataLoader.addEventListener("load", onDataLoadHandler);

dataLoader.src = "./persons.json";

function onDataLoadHandler(e) {
  const data = e.detail;
}
