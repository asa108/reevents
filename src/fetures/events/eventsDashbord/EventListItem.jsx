import React from "react";
import { useDispatch } from "react-redux";
import { deleteEvent } from "../eventAction";

import { Link } from "react-router-dom";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import EventListAttndee from "./EventListAttndee";
import { format } from "date-fns";

export default function EventListItem({ event }) {
  const dispatch = useDispatch();
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src={event.hostPhotoURL} />
            <Item.Content>
              <Item.Header content={event.title} />
              <Item.Description>Hosted by {event.hostedBy}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" />
          {format(event.date, "MMMM d, yyyy h:mm a")}
          <Icon name="marker" />
          {event.venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.attendees.map((attndee) => (
            <EventListAttndee key={attndee.id} attndee={attndee} />
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <div>{event.description}</div>
        <Button
          onClick={() => dispatch(deleteEvent(event.id))}
          color="red"
          floated="right"
          content="Delete"
        />

        <Button
          as={Link}
          to={`/events/${event.id}`}
          color="teal"
          floated="right"
          content="View"
        />
      </Segment>
    </Segment.Group>
  );
}
