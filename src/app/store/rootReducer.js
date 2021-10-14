import { combineReducers } from "redux";
import authReducer from "../../fetures/auth/authReducer";
import eventReducer from "../../fetures/events/eventReducer";
import testReducer from "../../fetures/sandox/testReducer";
import asyncReducer from "../async/asyncReducer";
import modalReducer from "../common/modals/modalReducer";

const rootReducer = combineReducers({
  test: testReducer,
  event: eventReducer,
  modals: modalReducer,
  auth: authReducer,
  async: asyncReducer,
});

export default rootReducer;
