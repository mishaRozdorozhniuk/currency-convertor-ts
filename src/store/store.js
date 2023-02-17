import {combineReducers, createStore} from 'redux';
import currency from "./reducers/currency";
import errorRequest from "./reducers/errorRequesrMessage";

const singleReducer = combineReducers({
    currency,
    errorRequest
});

const store = createStore(
    singleReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;