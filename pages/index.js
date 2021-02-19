import {Button, Form, FormControl, Jumbotron, Nav, Navbar, NavDropdown} from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <Navbar bg="white" expand="lg">
        <Navbar.Brand href="#" >
          <img src="logo.png" height="30"/>
        </Navbar.Brand>
      </Navbar>
      <div className="container">
        <Jumbotron className="text-center">
          <h1 className="jumbotron-heading">Crea porras gratis en segundos</h1>
          <p className="lead text-muted">Participa y comparte tu pronóstico sin instalar ninguna app. No requiere
            registro.</p>
          <img src="landing.png" className="img-fluid"/>
        </Jumbotron>
      </div>
    </div>
  )
}
