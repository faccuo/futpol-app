import '@styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'open-iconic/font/css/open-iconic-bootstrap.min.css'
import Head from "next/head";

function Application({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Futpol - porras gratis</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default Application
