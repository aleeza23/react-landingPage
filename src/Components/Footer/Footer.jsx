import Wrapper from "../Helper/Wrapper";
import logo from '../../assets/logo-arch.png'

const Footer = () => {
  const footerNav =['About Us', ' Work' , 'FAQ', 'Contact Us' , 'Privacy ']
  return <>
    <Wrapper>
      <footer className="row right-side__main">
      {
        footerNav?.map((nav, ind) => {
          return <>
          <div className="col-12 col-md-4 col-lg-1 order-2 order-lg-1" key={ind}>
      <li className="navbar-nav text-center text-lg-start">
          <a className="nav-link">{nav}</a>
        </li> 
      </div>
          </>
        })
      }
      <div className="col-12 col-lg-2 ms-auto text-center order-1 order-lg-2 ">
    <img src={logo} alt="logo"  />

      </div>
      
     
      </footer>
    </Wrapper>
  </>;
};

export default Footer;
