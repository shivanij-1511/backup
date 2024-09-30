import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./Components/Layout";
import { TicTacToe } from "./Components/TicTacToe";
import BuisnessTemplate from "./Components/BuisnessTemplate";
import TableComponent from "./Components/TableComponent";

import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css'
import config from "./Chatbot/config";
import MessageParser from "./Chatbot/MessageParser";
import ActionProvider from "./Chatbot/ActionProvider";


function App() {
  return (
    <div className="App">
{/* <BuisnessTemplate/> */}

  <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<BuisnessTemplate/>}> */}
          {/* <Route index element={<Layout/>} />
          <Route path="/tictactoe" element={<TicTacToe/>}/> */}
        <Route path="/" element={
<Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    }></Route>
       
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

