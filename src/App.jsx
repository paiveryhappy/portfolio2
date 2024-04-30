import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Feature from "./components/Feature";
import "./App.css";
import About from "./components/About";
import Pricing from "./components/Pricing";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Feature />
      <About />
      <Pricing />
    </>
  );
}

export default App;
