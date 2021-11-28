import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./ducks";

const configureStore = () => {
  let store = createStore(reducers,applyMiddleware(thunk))
  return store;
}

export { configureStore };