import React, {useState,useRef} from "react";
import cross_icon from '../Assets/X.png'
import circle_icon from '../Assets/O.png'
// import "../Assets/O.png";
// import "../Assets/X.png";
import '../CSS/Tic_PlayerVsPlayer.css'

import { Outlet, Link } from "react-router-dom";


let data=["","","","","","","","",""];
const Tic_PlayerVsPlayer = () => {
let [count,setCount]=useState(0);
let [lockBoard,setLockBoard]=useState(false);
let titleRef=useRef(null);
let box1=useRef(null);
let box2=useRef(null);
let box3=useRef(null);
let box4=useRef(null);
let box5=useRef(null);
let box6=useRef(null);
let box7=useRef(null);
let box8=useRef(null);
let box9=useRef(null);

let boxes_array=[box1,box2,box3,box4,box5,box6,box7,box8,box9];


const toggle=(e,num)=>{
  if(lockBoard){
    return 0;
  }
  if(count%2===0){
    e.target.innerHTML=`<img src='${cross_icon}'>`;
    data[num]="x";
    setCount(++count);
  }
  else{
    e.target.innerHTML=`<img src='${circle_icon}'>`;
    data[num]="o";
    setCount(++count);
  }
  checkWinner()
}

const checkWinner=()=>{
  if(data[0]==data[1] && data[1]==data[2] && data[2]!==""){
    wonGame(data[2])
  }
  if(data[3]==data[4] && data[4]==data[5] && data[5]!==""){
    wonGame(data[5])
  }
  if(data[6]==data[7] && data[7]==data[8] && data[8]!==""){
    wonGame(data[8])
  }
  if(data[0]==data[3] && data[3]==data[6] && data[6]!==""){
    wonGame(data[6])
  }
  if(data[1]==data[4] && data[4]==data[7] && data[7]!==""){
    wonGame(data[7])
  }
  if(data[2]==data[5] && data[5]==data[8] && data[8]!==""){
    wonGame(data[8])
  }
  if(data[0]==data[4] && data[4]==data[8] && data[8]!==""){
    wonGame(data[8])
  }
  if(data[2]==data[4] && data[4]==data[6] && data[6]!==""){
    wonGame(data[6])
  }
}

const wonGame=(winner)=>{
  setLockBoard(true);
  if(winner=="x")
  {
    titleRef.current.innerHTML=`Congrats winner is X`;
  }

  else if(winner!=="x" && winner!=="o"){
    titleRef.current.innerHTML=`draw`;
    
    }
  else{
    titleRef.current.innerHTML=`Congrats winner is O`;
  }

  
}
const reset=()=>{
  setLockBoard(false);
  data=["","","","","","","","",""];
  titleRef.current.innerHTML=`TIC TAC TOE - Player Vs Player`;
  boxes_array.map((e)=>{
    e.current.innerHTML="";
  })
}



  return (
    < div className="container">
      <h1 className="title" ref={titleRef}>TIC TAC TOE - Player Vs Player</h1>
      <Link to="/"><button className="home">HOME</button></Link>
      
      <div className="board">
        <div className="row1">
          <div className="box"ref={box1}  onClick={(e)=>{toggle(e,0)}} ></div>
          <div className="box" ref={box2}  onClick={(e)=>{toggle(e,1)}} ></div>
          <div className="box" ref={box3}  onClick={(e)=>{toggle(e,2)}}></div>
        </div>
        <div className="row2">
        <div className="box"  ref={box4} onClick={(e)=>{toggle(e,3)}}></div>
          <div className="box" ref={box5}  onClick={(e)=>{toggle(e,4)}}></div>
          <div className="box"  ref={box6} onClick={(e)=>{toggle(e,5)}}></div>
        </div>
        <div className="row3">
          <div className="box"  ref={box7} onClick={(e)=>{toggle(e,6)}}></div>
        
          <div className="box" ref={box8}  onClick={(e)=>{toggle(e,7)}}></div>
        
          <div className="box" ref={box9}  onClick={(e)=>{toggle(e,8)}}></div>
       
        </div>

      </div>
      <button className="reset" onClick={()=>{reset()}} >Reset Game</button>
    </div>
  );
};

export default Tic_PlayerVsPlayer;


