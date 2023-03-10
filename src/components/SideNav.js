import Nav from "../Nav";

function isActive(path) {
  return window.location.pathname.startsWith(path);
}

function SideNav() {
  return (
    <Nav>
      <Nav.List>
        <Nav.Item>
          <Nav.Link to="/intro" active={isActive("/")}>
            소개
          </Nav.Link>
        </Nav.Item>
        <Nav.Separator />
        <Nav.Item>
          <Nav.Link to="/about" active={isActive("/about")}>
            멋쟁이사자처럼
          </Nav.Link>
        </Nav.Item>
        <Nav.Item disabled>
          <Nav.Link to="/tree" active={isActive("/tree")}>
            운영진 조직도
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/front" active={isActive("/front")}>
            제작팀
          </Nav.Link>
          <Nav.List expanded={isActive("/front")}>
            <Nav.Item>
              <Nav.Link to="/front/eun" active={isActive("/front/eun")}>
                배채은
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link to="/front/ah" active={isActive("/front/ah")}>
                이진아
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link to="/front/hyun" active={isActive("/front/hyun")}>
                천승현
              </Nav.Link>
            </Nav.Item>
          </Nav.List>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/vision" active={isActive("/vision")}>
            우리의 비전
          </Nav.Link>
        </Nav.Item>
      </Nav.List>
    </Nav>
  );
}

export default SideNav;
