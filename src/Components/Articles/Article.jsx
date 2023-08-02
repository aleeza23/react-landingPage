import Wrapper from "../Helper/Wrapper";
import SliderBtn from "../Slider Button/SliderBtn";

const Article = () => {
  return (
    <>
    <div id="article">
      <Wrapper>
        <div className='row  '>
          <div className='col-12 col-md-10 col-lg-5'>
            <h1 className='heading h1 display-3'>Sound Too Good To Be True?</h1>
          </div>
        </div>

        <div className='row mt-3'>
          <div className='col-12 col-lg-1 offset-lg-4 mb-2'>
          <i className="fas fa-quote-left"></i>
          </div>
          <div className='col-12 col-lg-7 '>
            <p className="art-para  ">
              “We just wanted to thank you for this fantastic website! We are so
              grateful for being able to advertise our Petite cabin and receive
              feedback from people from all over the U.S. and even further.”
            </p>
            <div className="row ">
          <div className="col-12  col-lg-4 "><p>Adam Morph — CEO Alfatech</p></div>
          <div className="col-12 offset-lg-5  col-lg-3 "><SliderBtn /></div>

        </div>
          </div>         
        </div>        
      </Wrapper>
      </div>
    </>
  );
};

export default Article;
