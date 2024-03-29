import React from "react";
import "./Header.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        sticky="top"
        className="nav"
      >
        <Container>
          <Navbar.Brand as={HashLink} to="/home">
            HealthCare BD
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto nav-items">
              <Nav.Link as={HashLink} to="/home#home">
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#services">
                Services
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#news">
                News
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#covid">
                Covid 19
              </Nav.Link>
              <Nav.Link as={HashLink} to="/aboutUS">
                About Us
              </Nav.Link>
              <Nav.Link as={HashLink} to="/contactUS">
                Contact Us
              </Nav.Link>

              {}
              {user?.email ? (
                <div>
                  <Navbar.Text className="ms-2 username">
                    Signed in as:{" "}
                    <span className="text-light fw-bold">
                      {user?.displayName}
                    </span>
                  </Navbar.Text>
                  <Button onClick={logOut} variant="light">
                    Logout
                  </Button>
                </div>
              ) : (
                <>
                  <Nav.Link as={HashLink} to="/login">
                    <Button variant="light">Login/Register</Button>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
