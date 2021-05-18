import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import PersonReducer from './reducers/PersonReducer'

const store = createStore(PersonReducer,applyMiddleware(thunk));

export default store;