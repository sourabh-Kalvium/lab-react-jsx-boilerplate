import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  // code here
  render(){
      return(
        <div className='parent'>
             <h4>Kalvium gallary</h4>
              <div className='main'>
                 {this.imageData().map((ele)=>{
                 return <img className='elephant' src=   {ele.img} alt="img" />
                 })}
             </div>
           
         </div>
      )
  }

}
