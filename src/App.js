// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headnav from './Componet/Nav'
import Header from './Componet/Header'
import Main from './Componet/Main'
import Subhead from './Componet/Subhead';
import Javascript from './Componet/Javascript';
import Maincard from './Componet/Card'
import Footer from './Componet/Footer';
import Mainfooter from './Componet/Mainfooter';
import Page from './Componet/Page';
import Color from './Componet/Color';
import Game from './Componet/Game';
import Smallcard from './Componet/Smallcard';
import Quiz from './Componet/Quiz';
import Map from './Componet/Map';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router,Route } from 'react-router-dom';

// import { BrowserRouter as Router,Route } from 'react-router-dom';


function App() {
  return (
  
    <div >
      

   <Headnav/>
     

    <Header/>

    <Main/> 
     <Subhead/> 
    <Map/>
     {/* {/* <Javascript/> */}
     <Maincard/>   
      <Smallcard/>
     {/* footer section */}

      <Color/>
     <Page/>
     <Quiz/>
      <Game/>
    <Footer/>
     <Mainfooter/>
    
      
   </div>
  );
}

export default App;
