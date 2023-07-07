import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Header from './components/navbar';
import Section1 from './components/section1';
import Aboutus from './components/Aboutus';
import EventsAtAtraski from './components/EventsAtAtraski';
import Collaboration from "./components/Collaboration";
import Services from './components/Services';
import NewBanner from './components/Newbanner';
import WhatweOffer from './components/Services';
import MV from './components/MV';
import BrandCollaboration from './components/Collaboration';
import Team from './components/Team/Team';
import Test from './components/Test/Test';
import Opportunities from './components/Opportunities';
import Community from './components/Community';
import IP from './components/IP';
import City from './components/City';
import ClickableColumns from './components/serviceCard';
import Cities from './components/Cities';

 

function App() {
  return (
    <div style={{ backgroundColor: "black", color: "gainsboro" }}>
      <Header />
      <NewBanner />
      <Aboutus />
      <MV />
      <BrandCollaboration />
      <Services />
      {/* <ClickableColumns/> */}
      <IP />
      {/* <Collaboration /> */}
      {/* <Opportunities /> */}
      {/* <M /> */}
      {/* <EventsAtAtraski /> */}

      <Cities />

      {/* <City /> */}
      {/* <Team /> */}
      <Test />
      <Community />
    </div>
  ); 
  
}

export default App;




