import React from "react";
import { Router, Routes } from "react-router-dom";
import { Nama } from "./Nama";


const App = () => {
  return (
    <Routes>
      <Router path ="/" element={<Nama/>}/>
    </Routes>
  )
}

export default App