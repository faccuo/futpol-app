import { Button, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Link from "next/link";

const useStyles = makeStyles(theme => ({
  logo: {
    flexGrow: 1,
  },
}));
export default function Index() {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h3" align="center" style={{ fontWeight: '300' }} gutterBottom>
        Crea porras gratis en segundos
        </Typography>
      <Typography variant="h5" align="center" style={{ fontWeight: '300', color: '#6c757d' }} gutterBottom>
        Participa y comparte tu pronóstico sin instalar ninguna app. No requiere registro.
        </Typography>
      <div align="center">
        <img src="landing.png" style={{ objectFit: 'contain', width: '80%' }} />
      </div>
      <Link href="/create">
        <Button variant="contained" color="primary" style={{ marginTop: '40px' }}>
          Empezar
          </Button>
      </Link>
    </>
  )
}
