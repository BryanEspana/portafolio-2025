import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { AuthProvider } from '../contexts/AuthContext'
import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default appWithTranslation(App)