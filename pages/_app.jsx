import '../styles/globals.css'
import {QuizAppProvider} from "../services/context"
import Layout from "../components/Layout"

export default function App({ Component, pageProps }) {
  return (
    <QuizAppProvider>
<Layout>
        <Component {...pageProps} /></Layout>
        
        </QuizAppProvider>
    
  )
  

}
