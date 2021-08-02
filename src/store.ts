import createStore from "./createStore";
import reducers from "./reducers";
import sagas from "./sagas";

const configureStore = () =>
  createStore({
    reducers,
    sagas
  });

export default configureStore;
