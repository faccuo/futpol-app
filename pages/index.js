import {Button, Form, Image, Jumbotron, Navbar} from "react-bootstrap";

export default function Home() {
  return (
    <div className="container">
      <Navbar bg="white" className="justify-content-between">
        <Navbar.Brand href="#">
          <img src="logo.png" height="30"/>
        </Navbar.Brand>
        <Form inline>
          <Button variant="primary"><span className="oi oi-plus" aria-hidden="true"></span> Crear
            porra</Button>
        </Form>
      </Navbar>
      <Jumbotron className="text-center">
        <h1 className="jumbotron-heading">Crea porras gratis en segundos</h1>
        <p className="lead text-muted">Participa y comparte tu pronóstico sin instalar ninguna app. No requiere
          registro.</p>
        <Image src="landing.png" fluid className="img-landing"/>
        <Button variant="primary" className="btn-start">Empezar</Button>
      </Jumbotron>
    </div>
  )
}
