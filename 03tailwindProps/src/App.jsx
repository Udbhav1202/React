import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card.jsx"

function App() {
  return (
    <React.StrictMode>
      <Card username="Udbhav" btnText="CLICK"/>
      <Card username="Rahul" btnText="CLICK ME"/>
    </React.StrictMode>
  )
}

export default App;
