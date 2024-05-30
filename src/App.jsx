import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/pages/Home.jsx";
import Players from "./components/pages/Players.jsx";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";


function App() {


  return (
    <>
      <div className="App">
        <Header />
        <Navbar/>
        <Routes >
          <Route path="/" element={<Home />}/>
          <Route path="/players" element={<Players />}/>
          
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
