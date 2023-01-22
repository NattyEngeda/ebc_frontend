import '../styles/globals.css'
import '../styles/tailwind.css'
import Layout from './components/layout'
import { MantineProvider } from '@mantine/core';

export default function App({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page)
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {getLayout(<Component {...pageProps} />)}
    </MantineProvider>
  )
    ;
}
