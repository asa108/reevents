import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Container, Menu, Button } from "semantic-ui-react";
import SignedInMenu from "./SignedInMenu";
import SignedOutMenu from "./SignedOutMenu";

export default function NavBar({ setFormOpen, formOpen }) {
  const history = useHistory();

  const [auth, setAuth] = useState(false);

  function handleSignout() {
    setAuth(false);
    history.push("/");
  }
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} exact to="/" header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: "15px" }}
          />
          Re-vents
        </Menu.Item>
        <Menu.Item as={NavLink} to="/events" name="Events" />
        {auth && (
          <Menu.Item as={NavLink} to="/createEvent">
            <Button
              onClick={() => setFormOpen(true)}
              positive
              inverted
              content="Create Event"
            />
          </Menu.Item>
        )}
        {auth ? (
          <SignedInMenu signOut={handleSignout} />
        ) : (
          <SignedOutMenu setAuth={setAuth} />
        )}
      </Container>
    </Menu>
  );
}
