import {
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  FETCH_EVENT,
} from "./eventConstants";
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from "../../app/async/asyncReducer";
import { fetchSampleDate } from "../../app/api/mockApp";

export function loadEvents() {
  return async function (dispatch) {
    dispatch(asyncActionStart);
    try {
      const events = await fetchSampleDate();
      dispatch({ type: FETCH_EVENT, payload: events });
      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError(error));
    }
  };
}

export function createEvent(event) {
  return {
    type: CREATE_EVENT,
    payload: event,
  };
}

export function updateEvent(event) {
  return {
    type: UPDATE_EVENT,
    payload: event,
  };
}

export function deleteEvent(eventId) {
  return {
    type: DELETE_EVENT,
    payload: eventId,
  };
}
