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
// import Slider from './components/DemoSLider';
// import Demo from './components/Demo';
 

function App() {
  return (
    <>
      <Header />
      <Section1 />
      <Aboutus />
      <MissionVision />
      {/* <Models /> */}
      <M />
      <EventsAtAtraski />
      <Collaboration />
      <Services />
      <Cities/>
      {/* <Slider /> */}
      {/* <Demo/> */}
      {/* <Footer/> */}
    </>
  ); 
  
}

export default App;
