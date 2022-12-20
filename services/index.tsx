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
  questions = EnglishQuestions;
  static scoreCount = 0;
  currentIndex = 0

  constructor(){

  }

  static nextQuestions(){

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

