import { Fragment } from "react";
import AboutCaruselComponent from "../../components/aboutCarusel/aboutCarusel.component";
import AboutPageImagesContainerComponent from "../../components/aboutPageImagesContainer/AboutPageImagesContainerComponent";

const HomePage = () => {
  return (
    <Fragment>

      <div className="text-center"><h1>A Place For Yoga</h1></div>

    
  <AboutCaruselComponent />
  <div className="text-center mt-5"><h1>Our Products</h1></div>
  <AboutPageImagesContainerComponent />

    </Fragment>

  ) 
};

export default HomePage;
