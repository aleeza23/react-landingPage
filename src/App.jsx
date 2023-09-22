
import Architects from "./Components/Architects/Architects";
import Article from "./Components/Articles/Article";
import Gallery from "./Components/Design Gallary/Gallery";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero Section/Hero";
import Project from "./Components/Projects/Project";


const App = () => {
  return (
    <>
      <div id='top'>
      
        <Header />
        <Hero />
        <Gallery />
        <Architects />
        <Article />
        <Project />
        <hr />
        <Footer />        
      </div>

    </>
  );
};

export default App;
