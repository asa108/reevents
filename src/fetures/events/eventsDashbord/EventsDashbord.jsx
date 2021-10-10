import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "semantic-ui-react";

import EventList from "./EventList";

export default function EventsDashbord() {
  const { events } = useSelector((state) => state.event);

  // function handleCreateEvent(event) {
  //   setEvents([...events, event]);
  // }

  // function handleUpdateEvent(updateEvent) {
  //   setEvents(
  //     events.map((evt) => (evt.id === updateEvent.id ? updateEvent : evt))
  //   );
  //   selectEvent(null);
  // }

  function handleDeletEvet(eventId) {
    // setEvents(events.filter((evt) => evt.id !== eventId));
  }

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} deleteEvent={handleDeletEvet} />
      </Grid.Column>

      <Grid.Column width={6}>
        <h2>Event Filters</h2>
      </Grid.Column>
    </Grid>
  );
}
