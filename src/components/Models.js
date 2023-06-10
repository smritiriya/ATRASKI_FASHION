import React from 'react';
import "./M.css";
import { model1,model2,model3,model4,model5,model6,model7 } from '../assets';
import { Carousel } from 'react-bootstrap';

const M = () => {
    
  return (
    <div className="container ">
      <h1 className="Heading-1 text-center py-3 my-3">OUR MODELS</h1>
      <Carousel>
        <Carousel.Item >  
          <div className="d-flex justify-content-center shadow">
            <div className='m-2'>
              <img className="w-30 w-sm-10" src={model1} alt="First slide" />
            </div>
            <div className='m-2'>
              <img className="w-30" src={model2} alt="First slide" />
            </div>
            <div className='m-2'>
              <img className="w-30" src={model3} alt="First slide" />
            </div>

            
          </div>
        </Carousel.Item>
        <Carousel.Item>  
          <div className="d-flex justify-content-center">
            <div className='m-2'>
              <img className="w-30 w-sm-10" src={model1} alt="First slide" />
            </div>
            <div className='m-2'>
              <img className="w-30" src={model2} alt="First slide" />
            </div>
            <div className='m-2'>
              <img className="w-30" src={model3} alt="First slide" />
            </div>

            
          </div>
        </Carousel.Item>
   

        {/* Add more Carousel.Item components for additional slides */}
      </Carousel>
    </div>
  );
}

export default M
