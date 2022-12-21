import React,{useContext} from 'react'
import {EndQuiz} from "./endquiz"
import {Start} from "./start"
import {QuizContainer} from "./baj/category"
import {QuizApp} from "../../services/context"
import Math from "./baj/math"
import English from "./baj/eng"
import Science from "./baj/science"
import General from "./baj/general"


function MainContainer() {
  const {quizstate,setQuizState} = useContext(QuizApp)


  
  return (
    <>
    {quizstate == "math" && <Math/>}
    {quizstate == "english" && <English/>}
    {quizstate == "science" && <Science/>}
    {quizstate == "general" && <General/>}
   
    </>
  )
}

export default MainContainer
