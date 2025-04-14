import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <Nav
      variant="underline"
      className="justify-content-end"
      defaultActiveKey="/home"
    >
      <Nav.Item>
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="About">
          About
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="Portfolio">
          Portfolio
        </Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default NavBar
