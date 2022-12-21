import React,{useContext} from 'react'
import { QuizApp } from '../../services/context'


function EndQuiz() {
  const {totalscore} = useContext(QuizApp)
  return (
    <div>{totalscore}</div>
  )
}

export default EndQuiz