import React from "react";
import { List, Image } from "semantic-ui-react";

export default function EventListAttndee({ attndee }) {
  return (
    <List.Item>
      <Image size="mini" circular src={attndee.photoURL} />
    </List.Item>
  );
}
