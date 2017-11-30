import content from './reducer';

const createStore = require('redux').createStore;

const store = createStore(content);

export default store;
