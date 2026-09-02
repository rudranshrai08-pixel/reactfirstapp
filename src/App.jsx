import React from "react";
import Footer from "./component/footer/Footer";
import Header from  "./component/header/Header";
import {Routes, Route} from 'react-router-dom'
import Body from "./component/body/Body";
import About from "./component/About";

const App = () => {
  return (
    <div className = 'container'>
      <Header />
      <Routes>
        <Route path= "/" element={<Body/>}/>
        <Route path= "/about" element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
  )
};

export default App;