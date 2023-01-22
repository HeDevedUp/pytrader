import { AppProps } from 'next/app';
import { NextUIProvider,createTheme } from '@nextui-org/react'
import { globalCss } from '@nextui-org/react';

import '@/styles/globals.css';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

const theme = createTheme({
  type: "dark",
  theme: {
    colors: {
      primary: '#4ADE7B',
      secondary: '#F9CB80',
      error: '#B89F1B',
    },
  }
})
const globalStyles = globalCss({
  background: { color: "#B89F1B"}
});


function MyApp({ Component, pageProps }: AppProps) {

  return(
    <NextUIProvider theme={theme}>
    <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp;
