import { Container, Nav, Navbar } from "react-bootstrap";

export const NavBar = ({ currentPage, setCurrentPage }) => {
  const linkMap = ["Landing", "Counter"];
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand
            onClick={() => setCurrentPage("Landing")}
          ></Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {linkMap.map((link) => {
                return (
                  <Nav.Link
                    active={link === currentPage}
                    onClick={() => setCurrentPage(link)}
                  >
                    {link}
                  </Nav.Link>
                );
              })}
              ;
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
