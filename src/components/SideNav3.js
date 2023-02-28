import Nav from "../Nav";

function isActive(path) {
  return window.location.pathname.startsWith(path);
}

function SideNav3() {
  return (
    <Nav>
      <Nav.List>
        <Nav.Item>
          <Nav.Link to="/" active={isActive("/")}>
            홍보
          </Nav.Link>
        </Nav.Item>
        <Nav.Separator />
        <Nav.Item>
          <Nav.Link to="/sns" active={isActive("/sns")}>
            SNS
          </Nav.Link>
          <Nav.List expanded={isActive("/sns")}>
            <Nav.Item>
              <Nav.Link to="/sns/@likelion.knu" active={isActive("/sns/insta")}>
                INSTAGRAM
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link to="/sns/knulikelion" active={isActive("/sns/fabook")}>
                FACEBOOK
              </Nav.Link>
            </Nav.Item>
          </Nav.List>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/story" active={isActive("/story")}>
            OUR STORY
          </Nav.Link>
        </Nav.Item>
      </Nav.List>
    </Nav>
  );
}

export default SideNav3;
