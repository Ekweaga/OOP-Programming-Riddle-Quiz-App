import { useEffect } from "react";
import { Quizmodel } from "../models";
import { MathQuestions } from "../public/Data";
import { EnglishQuestions } from "../public/Data";
import { ScienceQuestions } from "../public/Data";
import { generalQuestions } from "../public/Data";


export class AuthService {

    static signUp = async (email:string,password:string,name:string)=>{

    }

   static  login = async (email:string,password:string)=>{

    }

}



export class QuizEnglish{
   questions;
   scoreCount =0;
   currentIndex = 0;
 
  constructor(){
    this.questions  = EnglishQuestions;
   
  }
 
nextQuestions = () => {
     this.currentIndex++;
     console.log(this.currentIndex)
    
 

  }




  

}

export class QuizMath{

}

export class QuizGeneral{

}


export class Timer{

}


export class UserData {

  constructor(){}

 async fetchUserData(){


  }


}



class AuthState {
  user={}

  constructor(){
useEffect(()=>{


},[])
  }

}


export class UI{
  constructor(){

  }
}

