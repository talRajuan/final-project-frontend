import { Fragment } from 'react';
import img1 from '../../assets/imgs/yoga1.jpeg';
import img2 from '../../assets/imgs/yoga2.jpeg';
import img4 from '../../assets/imgs/yoga4.jpeg';

const AboutCaruselComponent = () => {
	return(
    <Fragment>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="d-block w-100 h-50" alt="img1"/>
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100 h-50" alt="img2"/>
    </div>
    <div className="carousel-item">
      <img src={img4} className="d-block w-100 h-50" alt="img4"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </Fragment>
  )
};
export default AboutCaruselComponent;
