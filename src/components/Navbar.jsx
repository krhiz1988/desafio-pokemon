import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#58585a" }}
      >
        <Container>
          <Navbar.Brand>
            <img
              style={{ width: "50px", height: "50px" }}
              src="/img/pokebola.png"
              alt="image"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active" : "no-active"
                }
                to="/"
                style={{ textDecoration: 'none', color: 'white'  }}
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : undefined)}
                to="/select"
                style={{ paddingLeft: '10px', textDecoration: 'none', color: 'white'  }}
              >
                Pokemones
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
