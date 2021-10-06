import React, { useState } from "react";

import "./style.css";
import EventsDashbord from "../../fetures/events/eventsDashbord/EventsDashbord";
import NavBar from "../../fetures/nav/NavBar";
import { Container } from "semantic-ui-react";

function App() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <NavBar setFormOpen={setFormOpen} />
      <Container className="main">
        <EventsDashbord formOpen={formOpen} setFormOpen={setFormOpen} />
      </Container>
    </>
  );
}

export default App;
