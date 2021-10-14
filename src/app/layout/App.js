import React from "react";

import "./style.css";
import EventsDashbord from "../../fetures/events/eventsDashbord/EventsDashbord";
import NavBar from "../../fetures/nav/NavBar";
import { Container } from "semantic-ui-react";
import { Route, useLocation } from "react-router-dom";
import HomePage from "../../fetures/home/HomePage";
import EventDetailedPage from "../../fetures/events/eventDetaled/EventDetailedPage";
import EventForm from "../../fetures/events/eventForm/EventForm";
import Sandbox from "../../fetures/sandox/Sandbox";
import ModalManager from "../common/modals/ModalManager";
import { ToastContainer } from "react-toastify";

function App() {
  const { key } = useLocation();

  return (
    <>
      <ModalManager />
      <ToastContainer position="bottom-right" hideProgressBar />
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container className="main">
              <Route exact path="/events" component={EventsDashbord} />
              <Route exact path="/sandbox" component={Sandbox} />
              <Route path="/events/:id" component={EventDetailedPage} />
              <Route
                path={["/createEvent", "/manage/:id"]}
                component={EventForm}
                key={key}
              />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default App;
