
const SliderBtn = ({next , prev}) => {
  return <>

    <button onClick={prev} className="slider-btn"><i className="fas fa-arrow-left"></i></button>
    <button onClick={next} className="slider-btn" ><i className="fas fa-arrow-right"></i></button>

  </>;
};

export default SliderBtn;
