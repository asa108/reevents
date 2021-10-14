import { createStore, applyMiddleware } from "redux";
import testReducer from "../../fetures/sandox/testReducer";
import {
  devToolsEnhancer,
  composeWithDevTools,
} from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

export function configStore() {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
}
