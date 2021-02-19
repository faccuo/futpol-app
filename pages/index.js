import {Button, Form, FormControl, Image, Jumbotron, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Head} from "next/document";

export default function Home() {
  return (
    <div className="container">
      <Navbar bg="white">
        <Navbar.Brand href="#">
          <img src="logo.png" height="30"/>
        </Navbar.Brand>
      </Navbar>
      <Jumbotron className="text-center">
        <h1 className="jumbotron-heading">Crea porras gratis en segundos</h1>
        <p className="lead text-muted">Participa y comparte tu pronóstico sin instalar ninguna app. No requiere
          registro.</p>
        <Image src="landing.png" fluid/>
      </Jumbotron>
    </div>
  )
}
