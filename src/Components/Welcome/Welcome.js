import React from 'react';
//import './Welcome.css'
import Carousel from 'react-bootstrap/Carousel';


const Welcome = () => {
    // const date=new Date().toLocaleTimeString()
    // const dates=new Date()
    // const p=dates.getHours()
    // console.log(p)
    // let time='close';
    // if(p>=10 && p<17)
    // {
    //     time='open'
    // }
    return (
        
     


  
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/ZxMRt7Q/m2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>WELCOME TO  DEPARTMENT OF ICT</h3>
          <p>Mawlana Bashani Science And Technology</p>
          <p> University</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/VvBdY0y/bl-gamer-mbstu-cafetaria-central-library-photos-2021-1.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        <h3>WELCOME TO  DEPARTMENT OF ICT</h3>
          <p>Mawlana Bashani Science And Technology</p>
          <p> University</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/SdnZBYn/m3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        <h3>WELCOME TO  DEPARTMENT OF ICT</h3>
          <p>Mawlana Bashani Science And Technology</p>
          <p> University</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
}


    


export default Welcome;