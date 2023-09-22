import Button from "../Helper/Button";
import Wrapper from "../Helper/Wrapper";
import heroImg from "../../assets/Image.png";

const Hero = () => {
  return (
    <>
    <div id='hero'>
      <Wrapper >
        <div className='row mt-5 '>
          <div className='col-12 col-lg-6'>
            <h1 className='main-heading h1 display-1'>Build Your Dream  <span>House</span></h1>
          </div>
        </div>

        <div className='row'>
          <div className='col-12 col-lg-4'>
            <div className='main-para'>
              <p>
                100% guaranteed build safe, comfortable and transparent with a
                project management for the best result
              </p>
              <Button name='Free Consultation' />
            </div>
          </div>
          <div className='col-12 col-lg-8'>
            <div className='img-container'>
              <img
                className='img-container__img'
                src={heroImg}
                alt='hero-img'
              />
            </div>
          </div>
        </div>
      </Wrapper>
      </div>
    </>
  );
};

export default Hero;
