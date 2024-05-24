import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home.jsx";
import Cricket from "./components/pages/Cricket.jsx";
import Football from "./components/pages/Football.jsx";
import Tennis from "./components/pages/Tennis.jsx";
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
          <Route path="/cricket" element={<Cricket />}/>
          <Route path="/football" element={<Football />}/>
          <Route path="/tennis" element={<Tennis />}/>
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
