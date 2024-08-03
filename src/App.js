import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
           <>
               <NavBar/>
               <Home/>     
               <Main/>
               <Footer/> 
           </>

  )
}

export default App

