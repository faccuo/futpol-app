import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import { AddBox } from '@material-ui/icons';
import '@styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from "framer-motion";
import Head from "next/head";
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';


const useStyles = makeStyles(theme => ({
  logo: {
    flexGrow: 1,
  },
}));

function Application({ Component, pageProps, router }) {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Futpol - porras gratis</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>
      <AppBar position="static" color="default" elevation={0} color="inherit">
        <Toolbar>
          <div className={classes.logo}>
            <Link href="/" passHref>
              {/* <img src="logo.png" height="30" /> */}
              <Button startIcon={<img src="logo.png" height="30" />} style={{ backgroundColor: 'transparent' }} disableRipple/> 
            </Link>
          </div>
          <Link href="/create" passHref>
            <IconButton color="primary">
              <AddBox fontSize="large" />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
      <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
        pageInitial: {
          opacity: 0
        },
        pageAnimate: {
          opacity: 1
        },
      }}>
        <Component {...pageProps} />
      </motion.div>
    </>
  )
}

export default Application
