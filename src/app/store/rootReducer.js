import { combineReducers } from "redux";
import authReducer from "../../fetures/auth/authReducer";
import eventReducer from "../../fetures/events/eventReducer";
import testReducer from "../../fetures/sandox/testReducer";
import modalReducer from "../common/modals/modalReducer";

const rootReducer = combineReducers({
  test: testReducer,
  event: eventReducer,
  modals: modalReducer,
  auth: authReducer,
});

export default rootReducer;
