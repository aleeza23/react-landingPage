import Wrapper from "../Helper/Wrapper";
import img01 from '../../assets/img-01.png'
import img02 from '../../assets/img-02.png'
import img03 from '../../assets/img-03.png'
import img04 from '../../assets/img-04.png'
import SliderBtn from "../Slider Button/SliderBtn";
import { useState } from "react";

const Gallery = () => {
  
  //Slider
  const [currentSlide, setCurrentSlide] = useState(0);
  //gallary imges array
  const imgesArray = [img01 , img02 , img03 , img04, ]

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % imgesArray.length  );
    console.log('i am clicked');
    }
  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + imgesArray.length) % imgesArray.length )
  }






  return <>
    <div  id='design'>
    <Wrapper>
      <div className="row ">
        <div className="col-12 col-lg-5">
        <h1 className='heading h1 display-4  mb-lg-4' >Build professional valuable room</h1> 
        </div>
        <div className="col-12  mt-auto offset-lg-5 col-lg-2 mb-3">
        <SliderBtn next={handleNextSlide} prev={handlePrevSlide} />
        </div>
      </div>

      <div className="slider-container ">
      {
        imgesArray?.map((gallaryImg ,) => {
           
          return <>
          <div className="gallary-container" key={currentSlide}>
          <div className="gallary-container__img pe-lg-5 pe-2 ">
          <img src={gallaryImg} alt="gallary-img" />
          </div>
        </div>
          </>
        })
      }        
      </div>
      </Wrapper>
    </div>
  </>;
};

export default Gallery;
