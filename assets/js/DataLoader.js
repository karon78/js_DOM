'use strict';

class DataLoader extends EventTarget {

  /**
   *
   * @param {string} url
   * @param {object} [options]
   * @param {'json'|'text'|'formData'|'blob'|'arrayBuffer'} [options.parseMethod]
   */
  loadData (url, { parseMethod, ...rest } = { parseMethod: 'json' }) {
    fetch(url, rest)
      .then(res => res[parseMethod]())
      .then(data => {
        this.dispatchEvent(new CustomEvent('load', {
          detail: data,
        }));
      }).catch(error => {
      this.dispatchEvent(new CustomEvent('error', {
        detail: error,
      }));
    });
  }
}

export default DataLoader;