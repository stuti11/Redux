import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers.js";

const initalState = {};
const middleware = [thunk];

//const store = createStore(() => [], {}, applyMiddleware());
// reducer =  it decide data manipulation in store
// inital state = can be empty
// enhancer =

const store = createStore(
  rootReducer,
  initalState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
