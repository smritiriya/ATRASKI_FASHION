import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Header from './components/navbar';
import Section1 from './components/section1';
import Aboutus from './components/Aboutus';
import MissionVision from "./components/missionvission";
// import Models from './components/Models';
import M from './components/Models';
import EventsAtAtraski from './components/EventsAtAtraski';
import Collaboration from "./components/Collaboration";
import Services from './components/Services';
import Footer from './components/Footer';
import Cities from './components/Cities';
import PreduliveCarousel from './components/preduliveCarousel';
import Banner from './components/Banner';
import NewBanner from './components/Newbanner';
import WhatweOffer from './components/Services';
import GridExample from './components/MV';
import MV from './components/MV';
// import Slider from './components/DemoSLider';
// import Demo from './components/Demo';
 

function App() {
  return (
    <div style={{ backgroundColor: "black", color: "gainsboro" }}>
      <Header />
      {/* <Section1 /> */}
      <NewBanner />
      <Aboutus />
      {/* <MissionVision /> */}
      {/* <GridExample/> */}
      {/* <Models /> */}
      <MV />
      <Collaboration />
      <M />
      {/* <EventsAtAtraski /> */}

      <Services />
      <Cities />
      {/* <Slider />
      <Demo/> */}
      <Footer />
      {/* <PreduliveCarousel /> */}
      {/* <Banner/> */}
    </div>
  ); 
  
}

export default App;
