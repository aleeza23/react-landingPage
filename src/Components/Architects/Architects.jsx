import Wrapper from "../Helper/Wrapper";
import archImg from "../../assets/img-5.png";
import Button from "../Helper/Button";
import icon01 from '../../assets/icon.png'
import icon02 from '../../assets/icon(1).png'
import icon03 from '../../assets/icon(2).png'

// import {AiOutlineSafetyCertificate} from 'react-icons/ai';

const Architects = () => {
  return (
    <>
    <div id="arch">
      <Wrapper>
        <div className='row '>
          <div className='col-12 col-lg-6 '>
            <div className='img-container'>
              <img src={archImg} alt='arch-img' />
            </div>
          </div>

          <div className='col-12 col-lg-6 right-side__main '>
            <div className='row right-side'>
              <div className='col-12  col-lg-9 '>
              <div className="row">
                <div className="col-12 col-md-9 col-lg-12">
                <h1 className='heading h1 display-4'>Build your needs with Archmove</h1>
                </div>
              </div>

                <div className='row g-4 '>
                  {data?.map((val) => {
                    return (
                      <>
                      <div className="col-3" key={val.title}>
                        <img src={val.icon} alt={val.desc} />
                      </div>
                        <div className='col-9'>
                          <strong>{val.title}</strong>
                          <p>{val.desc}</p>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className=' col-12 col-lg-3 offset-lg-5 '>
            <Button  name='Free Consultation' />
          </div>
        </div>
      </Wrapper>
      </div>
    </>
  );
};

const data = [
  {
    icon: icon01,
    title: "100% guaranteed project completion",
    desc: "Build safe, comfortable and transparent with a project management application with a joint account.",
  },
  {
    icon: icon02,
    title: "No additional fees",
    desc: "There are no hidden costs. The value of the offer you get is the value you paid.",
  },
  {
    icon: icon03,
    title: "Get escort from the Team",
    desc: "Monitor reports from the Arsitag team who check directly in the field.",
  },
];

export default Architects;
