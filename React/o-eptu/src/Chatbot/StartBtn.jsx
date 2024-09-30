import React from 'react'
import Chatbot from '../Components/Chatbot'
import { useNavigate, Link } from "react-router-dom";


const Avatar=()=>{
    return(
        <div className=''>SA</div>
    )
}


const FileBtn = (props) => {
    const navigate = useNavigate();
    const fileComplaint=()=>{
 
         navigate("/Chatbot")
    }

    const pageRedirectState=()=>{
       props.actions.pageRedirectState()
       
 }
    return (
      <div>
          <button className='btn' onClick={()=>fileComplaint()}>File Complaint</button>
          <button className='btn' onClick={()=>pageRedirectState()} >Find Page </button>
      </div>
    )
  }
  

  const RedirectBtn = () => {
    const navigate = useNavigate();
    const redirectpage=(page)=>{
        if(page==='Bookings')
        {
            navigate("/Chatbot")
        }
        if (page==='floor-map') {
            navigate("/Chatbot")
        }
           if ('auditorium') {
            navigate("/Chatbot")
           }
           if ('feedback') {
            navigate("/Chatbot")
           }
    }
    return (
      <div>
        <button className='btn ' onClick={()=>redirectpage('Bookings')}>Bookings</button>
        <button className='btn' onClick={()=>redirectpage('floor-map')}>Floor Map</button>
        <button className='btn' onClick={()=>redirectpage('auditorium')}>Auditoriums</button>
        <button className='btn' onClick={()=>redirectpage('feedback')}>Feedback</button>
    
        

      </div>
    )
  }


const StartBtn = (props) => {
    const initialState=()=>{
        props.actions.initialState();
    }
  
    return (
        <div>
            <button className='btn' onClick={()=>initialState()}>Lets get started</button>
        </div>
      )
    }




















export {FileBtn,StartBtn,RedirectBtn}