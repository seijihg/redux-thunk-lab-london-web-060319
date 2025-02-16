import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import catsReducer from "./reducers/cats_reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  cats: catsReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
