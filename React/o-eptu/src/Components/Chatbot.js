import { Segment } from 'semantic-ui-react'
import React from 'react'
import ChatBot from'react-simple-chatbot'

                  

function Chatbot() {
    const steps=[
        {
            id:'Greet',
            message:'Hello,Welcome to Book My Conference Help Centre.How Can I assist you?',
            trigger:'Ask Name'
        },{
            id:'Ask Name',
            message:'Please Enter your registered email id.',
            trigger:'waiting1'
        },{
            id:'waiting1',
            user:true,
            trigger:'Name'
        },{
            id:'Name',
            message:'Hi {previousValue}, Please select your issue',
            trigger:'issues'
        },{
            id:'issues',
            options:[
                {value:'Housekeeping',label:'Housekeeping',trigger:'Housekeeping'},
                {value:'Booking', label:'Booking',trigger:'Booking'}
            ]
        },{
            id:'Housekeeping',
            message:'Thanks for your input, we will resolve it',
            end:true
        },{
            id:'Booking',
            message:'Thanks for your input, we will resolve it',
            end:true
        }
    ]
  return (
    <><Segment floated="right">
        <ChatBot steps={steps}></ChatBot>
        </Segment></>
  )
}

export default Chatbot