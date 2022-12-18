import { useEffect } from "react";


export class AuthService {

    static signUp = async (email:string,password:string,name:string)=>{

    }

   static  login = async (email:string,password:string)=>{

    }

}


export class QuizInfo {

     public time:number = 1200
    isLow : any;
    isHigh:any;
    completed :boolean = false;
  name:any;
  disable= false;
  public questionsList:any = []
  points = 0;
  currentNumber : number = 0;
  counter = 60;
  correctAns = 0 ;
  wrongAns = 0;
  progress : string = "0"

  constructor(){
    
  }
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

