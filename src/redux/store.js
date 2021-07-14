import { createStore } from "redux";
import reducers from "./reducers";

// first argument is the reducers and second is the state (empty state)
const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
