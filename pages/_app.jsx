import '../styles/globals.css'
import {AuthProvider, QuizAppProvider} from "../services/context"
import Layout from "../components/Layout"

export default function App({ Component, pageProps }) {
  return (

    <>
    <AuthProvider>
    <QuizAppProvider>
<Layout>
        <Component {...pageProps} /></Layout>
        
        </QuizAppProvider>

        </AuthProvider>

        </>
    
  )
  

}
