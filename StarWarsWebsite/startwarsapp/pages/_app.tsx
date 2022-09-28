import 'bootstrap/dist/css/bootstrap.css'
import "../styles/globals.css";
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { store } from '../redux/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="containerpage">

        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Component {...pageProps} />
        </main>

        <div className="bg-animation">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div id="stars4"></div>
        </div>

        <footer >

        </footer>
      </div>
    </Provider>
  )
}

export default MyApp