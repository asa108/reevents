import React, { useState } from "react";
import { Grid } from "semantic-ui-react";

import { sampleData } from "../../../app/api/sampleData";

import EventForm from "../eventForm/EventForm";
import EventList from "./EventList";

export default function EventsDashbord({
  formOpen,
  setFormOpen,
  selectEvent,
  selectedEvent,
}) {
  const [events, setEvents] = useState(sampleData);

  function handleCreateEvent(event) {
    setEvents([...events, event]);
  }

  function handleUpdateEvent(updateEvent) {
    setEvents(
      events.map((evt) => (evt.id === updateEvent.id ? updateEvent : evt))
    );
    selectEvent(null);
  }

  function handleDeletEvet(eventId) {
    setEvents(events.filter((evt) => evt.id !== eventId));
  }

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList
          events={events}
          selectEvent={selectEvent}
          deleteEvent={handleDeletEvet}
        />
      </Grid.Column>

      <Grid.Column width={6}>
        {formOpen && (
          <EventForm
            setFormOpen={setFormOpen}
            setEvents={setEvents}
            createEvent={handleCreateEvent}
            selectedEvent={selectedEvent}
            updateEvent={handleUpdateEvent}
            key={selectedEvent ? selectedEvent.id : null}
          />
        )}
      </Grid.Column>
    </Grid>
  );
}
