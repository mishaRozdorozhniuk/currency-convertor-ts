import {combineReducers, createStore} from 'redux';
import currency from "./reducers/currency";

const singleReducer = combineReducers({
    currency
});

const store = createStore(
    singleReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;