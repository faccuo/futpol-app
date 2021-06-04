import { Box, Button, Card, CardMedia, Container, Paper, Typography } from "@material-ui/core";
import Link from "next/link";
import { makeStyles } from '@material-ui/core/styles';
import Image from 'material-ui-image';

const useStyles = makeStyles(theme => ({
  logo: {
    flexGrow: 1,
  },
}));
export default function Index() {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="m" component="main" align="center">
        <Typography variant="h3" align="center" style={{ fontWeight: '300' }} gutterBottom>
          Crea porras gratis en segundos
        </Typography>
        <Typography variant="h5" align="center" style={{ fontWeight: '300', color: '#6c757d' }} gutterBottom>
          Participa y comparte tu pronóstico sin instalar ninguna app. No requiere registro.
        </Typography>
        <div align="center">
          <img src="landing.png" style={{ objectFit: 'contain', width: '80%' }} />
        </div>
        {/* <Container fluid>
          <img src="landing.png" />
        </Container> */}
        <Link href="/create">
          <Button variant="contained" color="primary" style={{ marginTop: '40px' }}>
            Empezar
          </Button>
        </Link>
      </Container>
      {/* <Jumbotron className="text-center">
        <h1 className="jumbotron-heading">Crea porras gratis en segundos</h1>
        <p className="lead text-muted">Participa y comparte tu pronóstico sin instalar ninguna app. No requiere
        registro.</p>
        <Image src="landing.png" fluid className="img-landing" />
        <Link href="/create">
          <Button variant="primary" className="btn-start">Empezar</Button>
        </Link>
      </Jumbotron> */}
    </>
  )
}
