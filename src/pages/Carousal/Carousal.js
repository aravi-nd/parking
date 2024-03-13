import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousal.css';

export default function CustomCarousel() {
  return (
    <Carousel>
   
      <Carousel.Item>
        <img className="d-block  carousel-custom" src="https://media.istockphoto.com/id/959429948/photo/aerial-view-parking-lot-and-car.jpg?s=612x612&w=0&k=20&c=59zTaBOhHsNfVQ0J36juyYneKq8IOlrP2CCHMwLEEgQ=" alt="First slide" />
        <Carousel.Caption>
      <div className='custom-form'>
      <input type='text' placeholder='search '>
      </input>
      <button >
      search
      </button>
      </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block carousel-custom " src="https://media.istockphoto.com/id/1289128767/photo/young-indian-businessman-or-employee-sitting-in-car-and-giving-card.jpg?s=612x612&w=0&k=20&c=arrE2_o1hS0gDugcPFTGffNMnYgVTLveVAluPKe6ghQ=" alt="Second slide" />
        <Carousel.Caption>
          <div className='my-custom-caption'>
          <h1></h1>
          <p></p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block carousel-custom " src="https://media.istockphoto.com/id/1452170197/photo/aerial-view-of-rows-of-new-cars.jpg?s=2048x2048&w=is&k=20&c=GT3lKYqokn7wWk3EWDWyI8QmEoRs4R4N2LMn5zbpd3Q=" alt="Third slide" />
        <Carousel.Caption>
        <div className='my-custom-caption'>
       <h1></h1>
       <p></p>
       </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
