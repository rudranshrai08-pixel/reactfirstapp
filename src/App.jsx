<<<<<<< HEAD
import React from 'react'
import Footer from "./component/footer/footer"
import Header from "./component/header/header"
import { Route, Routes } from 'react-router-dom'
import Body from "./component/body/body"
import CounterP from "./component/CounterP"
import Contact from "./component/Contact"
import Courses from './component/Courses'
import About from "./component/About"
 import Offline from './component/Offline'
 import Online from './component/Online'
import Error404 from './component/Error404'
import Product from './component/Product'
const App = () => {
  return (
    <div className='container'>
        <Header/>
        <Routes>
          <Route path="/" element={<Body/>}/>
          <Route path="/courses" element={<Courses/>}>
          <Route index element={<Offline/>}/>
          <Route path="offline" element={<Offline/>}/>
          <Route path="online" element={<Online/>}/>
          </Route>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/counter" element={<CounterP/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About info="This is props by routes"/>}/>
          <Route path="*" element={<Error404/>}/>

        </Routes>
        <Footer/>
    </div>
  )
}

export default App
=======
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
>>>>>>> 5151341eeabea143da723c4d31779e2288c38925
