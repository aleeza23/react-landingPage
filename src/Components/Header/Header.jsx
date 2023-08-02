// import { Link } from 'react-router-dom';
import {Link} from 'react-scroll'
import logo from "../../assets/logo-arch.png";
const Header = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg  '>
        <div className='container'>
          <img src={logo} alt='logo' className='navbar-brand' />
          {/* Search btn for sm */}
          <div className='nav-icon'>
            <button>
              <i className='fa fa-search ms-auto me-2 d-block d-md-none'></i>
            </button>
          </div>

{/* Navbar toggler Btn */}
          <button
            className='navbar-toggler collapsed'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='toggler-icon top-bar'></span> 
            <span className='toggler-icon middle-bar'></span>            
            <span className='toggler-icon bottom-bar'></span>            

          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link to="hero" spy={true} smooth={true} offset={-60} duration={500} className='nav-link'> How it works </Link>
              </li>
              <li className='nav-item'>
                <Link to="design" spy={true} smooth={true} offset={-100} duration={500} className='nav-link'> Design Gallary </Link>
              </li>
              <li className='nav-item'>
                <Link to="arch" spy={true} smooth={true} offset={-100} duration={500} className='nav-link'> Architects </Link>
              </li>
              <li className='nav-item'>
                <Link to="article" spy={true} smooth={true} offset={-100} duration={500} className='nav-link'> Articles </Link>
              </li>
            </ul>

            <div className='nav-icon'>
              <button>
                <i className='fa fa-search d-none d-md-block'></i>
              </button>
              <button>Sign In</button>
              <button className='active'>Sign Up</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
