import '../styles/globals.css'
import {Provider} from "react-redux";
import {store} from "../app/store";

// function MyApp({ Component, pageProps }) {

//   return (
    // <Provider store={store}>
    //    <Component {...pageProps} />
    // </Provider>
//   )
  
  
// }

// export default MyApp
import { SessionProvider } from "next-auth/react"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
        <Provider store={store}>
           <Component {...pageProps} />
        </Provider>
    </SessionProvider>
  )
}