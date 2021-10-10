import { combineReducers } from "redux";
import eventReducer from "../../fetures/events/eventReducer";
import testReducer from "../../fetures/sandox/testReducer";

const rootReducer = combineReducers({
  test: testReducer,
  event: eventReducer,
});

export default rootReducer;
