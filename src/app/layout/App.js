import React from "react";

import "./style.css";
import EventsDashbord from "../../fetures/events/eventsDashbord/EventsDashbord";
import NavBar from "../../fetures/nav/NavBar";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import HomePage from "../../fetures/home/HomePage";
import EventDetailedPage from "../../fetures/events/eventDetaled/EventDetailedPage";
import EventForm from "../../fetures/events/eventForm/EventForm";

function App() {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container className="main">
              <Route exact path="/events" component={EventsDashbord} />
              <Route path="/events/:id" component={EventDetailedPage} />
              <Route
                path={["/createEvent", "/manage/:id"]}
                component={EventForm}
              />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default App;
