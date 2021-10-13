import React, { Component } from "react";
import Slider from "react-slick";
import './App.css'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", backgroundColor: 'black', zIndex:2, left:'97%'}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", backgroundColor: 'black',zIndex:2 ,left:'2%'}}
      onClick={onClick}
    />
  );
}

const Carousel = () => {
  const settings = {
    arrows:true,
    dots: true,    
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: dots => (
      <div
        style={{
          bottom: '5px'
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    )

  };

  return(
  <div style={{paddingTop:'62px'}}>
    <Slider {...settings}>
      <div className="slideSecond">
        <img src="../images/detention_slider.png" style={{ display:'inline-block', width:'auto'}} ></img>
      </div>      
      <div className="slideFirst">
        <img src="../images/devotion_slider.png" style={{opacity:'0.5', display:'inline-block', width:'auto'}}></img>
      </div>
    </Slider>
  </div>
   
  )};



export default Carousel;
