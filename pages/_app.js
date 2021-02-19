import '@styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'open-iconic/font/css/open-iconic-bootstrap.min.css'
import Head from "next/head";
import {Button, Form, Navbar} from "react-bootstrap";
import Link from "next/link";
import {motion} from "framer-motion";

function Application({Component, pageProps, router}) {
  return (
    <>
      <Head>
        <title>Futpol - porras gratis</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
      </Head>
      <div className="container">
        <Navbar bg="white" className="justify-content-between">
          <Link href="/">
            <Navbar.Brand href="#">
              <img src="logo.png" height="30"/>
            </Navbar.Brand>
          </Link>
          <Form inline>
            <Link href="/create">
              <Button variant="primary"><span className="oi oi-plus" aria-hidden="true"></span></Button>
            </Link>
          </Form>
        </Navbar>
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
      </div>
    </>
  )
}

export default Application
