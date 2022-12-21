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
  questions:Array<Quizmodel>;
  scoreCount;
  currentIndex = 0 ;
  showres:boolean;
 
  constructor(){
    this.questions  = EnglishQuestions;
    this.scoreCount =0;
    this.showres = false;
  
  
   
  }
 
nextQuestions = () => {

  

  
    this.currentIndex++;
   
    
    
 

  }




  

}

export class QuizMath{

  questions:Array<Quizmodel>;
  scoreCount;
  currentIndex = 0 ;
  showres:boolean;
 
  constructor(){
    this.questions  = MathQuestions;
    this.scoreCount =0;
    this.showres = false;
  
  
   
  }
 
nextQuestions = () => {

  

  
    this.currentIndex++;
   
    
    
 

  }


}

export class QuizGeneral{

  questions:Array<Quizmodel>;
  scoreCount;
  currentIndex = 0 ;
  showres:boolean;
 
  constructor(){
    this.questions  = generalQuestions;
    this.scoreCount =0;
    this.showres = false;
  
  
   
  }
 
nextQuestions = () => {

  

  
    this.currentIndex++;
   
    
    
 

  }

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

