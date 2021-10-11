import { combineReducers } from "redux";
import eventReducer from "../../fetures/events/eventReducer";
import testReducer from "../../fetures/sandox/testReducer";
import modalReducer from "../common/modals/modalReducer";

const rootReducer = combineReducers({
  test: testReducer,
  event: eventReducer,
  modals: modalReducer,
});

export default rootReducer;
