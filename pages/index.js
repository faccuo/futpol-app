import {Button, Form, Image, Jumbotron, Navbar} from "react-bootstrap";
import Link from "next/link"

export default function Home() {
  return (
    <Jumbotron className="text-center">
      <h1 className="jumbotron-heading">Crea porras gratis en segundos</h1>
      <p className="lead text-muted">Participa y comparte tu pronóstico sin instalar ninguna app. No requiere
        registro.</p>
      <Image src="landing.png" fluid className="img-landing"/>
      <Link href="/create">
        <Button variant="primary" className="btn-start">Empezar</Button>
      </Link>
    </Jumbotron>
  )
}
