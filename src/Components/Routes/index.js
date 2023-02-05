import React from 'react'
import { Routes, Route } from "react-router-dom";
import About from '../../Pages/About';
import Contact from '../../Pages/Contact';
import Help from '../../Pages/Help';
import Home from '../../Pages/Home';
import Proudect from '../../Pages/Proudect';
import SignInForm from "../../Pages/Signin/Signup/SignInForm.js"
import SignUpForm from "../../Pages/Signin/Signup/SignUpForm.js"
import CheckoutForm from '../../Pages/CheckoutForm';
const RouterPage = () => {
  return (
    <Routes>
<Route path="/" element={<Home/>}/>
<Route path="About" element={<About/>}/>
<Route path="Contact" element={<Contact/>}/>
<Route path="Help" element={<Help/>}/>
<Route path="Proudect" element={<Proudect/>}/>
<Route path="SignInForm" element={<SignInForm/>}/>
<Route path="SignUpForm" element={<SignUpForm/>}/>
<Route path="CheckoutForm" element={<CheckoutForm/>}/>
    </Routes>
  )
}

export default RouterPage;
