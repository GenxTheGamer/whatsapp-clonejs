import React from "react";
import './App.css';
import Chat from "./Chat";
import Sidebar from "./Sidebar";

function App() {
  return (
    //BEM Naming Convention
    <div className="app">
      <h1>Lets Build Whatsapp!</h1>
      <div className="app__body">
        <Sidebar/>
        <Chat />
      {/* Chat */}
    </div>
  </div>
  );
}

export default App;
