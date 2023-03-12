import Nav from "../Nav";

function isActive(path) {
  return window.location.pathname.startsWith(path);
}

function SideNav2() {
  return (
    <Nav>
      <Nav.List>
        <Nav.Item>
          <Nav.Link to="/track" active={isActive("/track")}>
            트랙
          </Nav.Link>
        </Nav.Item>
        <Nav.Separator />
        <Nav.Item>
          <Nav.Link to="frontend" active={isActive("/frontend")}>
            FRONT-END
          </Nav.Link>
        </Nav.Item>
        <Nav.Item disabled>
          <Nav.Link to="back" active={isActive("/back")}>
            BACK-END
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="design" active={isActive("/design")}>
            DESIGN
          </Nav.Link>
        </Nav.Item>
      </Nav.List>
    </Nav>
  );
}

export default SideNav2;
