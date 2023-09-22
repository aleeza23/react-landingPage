import Wrapper from "../Helper/Wrapper";
import projectsIMg from '../../assets/Mask Group.png'
import Button from "../Helper/Button";
const Project = () => {
  return <>
  <section className="project-bg py-5">
    <Wrapper>
        <div className="row">
            <div className="col-12 col-lg-6">
            <div className="img-container">
                <img  src={projectsIMg} alt="project-img" />
                </div>
            </div>
            <div className="col-12 col-lg-5  right-side__project">
            <div className="project-test">
                <h1 className='main-heading2  h1 display-3'>Realize your dream project with <span>Archmove</span></h1>
                <Button name='FREE CONSULTATION' />
                </div>
            </div>

        </div>
    </Wrapper>
    </section>
  </>;
};

export default Project;
