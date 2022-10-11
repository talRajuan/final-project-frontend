import { Fragment } from "react";
import "./about.css";
import img1 from "../../assets/imgs/yoga1.jpeg"
import img2 from "../../assets/imgs/yoga2.jpeg"
import img4 from "../../assets/imgs/yoga4.jpeg"

const AboutPage = () => {
  return(
    <Fragment>
      
<div className="container ">
  
<div>
    
      <h1  className=" text-center">The Yoga Space</h1>
      <h1  className=" text-center mt-5">Techers</h1>
      <h3  className=" text-center mt-5">here you can publish your self as a techer in your erea</h3>
      <img className="d-block w-100" src={img1} alt="yoga1"/>
    </div>
    
<div>
    
      
      <h1 className="text-center mt-5">Students</h1>
      <h3 className="text-center mt-5">As a student you will be able to find the right instructor for you, in your erea and based on your budget</h3>
      <img className="d-block w-100" src={img2} alt="yoga1"/>
    </div>
    
<div>
    
      
      <h1 className="text-center mt-5">Stores</h1>
      <h3 className="text-center mt-5">Register with the yoga space as a business and start selling your products!</h3>
      <img className="d-block w-100 bottom-img" src={img4} alt="yoga1"/>
    </div>
    






</div>

    </Fragment>
  )
};

export default AboutPage;
