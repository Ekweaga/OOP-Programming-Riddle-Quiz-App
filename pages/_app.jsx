import '../styles/globals.css'
import {QuizApp} from "../services/context"
import Layout from "../components/Layout"

export default function App({ Component, pageProps }) {
  return (
    <QuizApp>
<Layout>
        <Component {...pageProps} /></Layout>
        
        </QuizApp>
    
  )
  

}
