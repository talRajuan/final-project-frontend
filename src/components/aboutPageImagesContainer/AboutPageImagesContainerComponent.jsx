import { useRef } from "react";
import "./AboutPageImagesContainerComponent.css";
import img5 from "../../assets/imgs/yoga5.jpeg";

const AboutPageImagesContainerComponent = () => {
  const itemsDiv = useRef();
  const handlePrevBtn = () => {
    itemsDiv.current.scrollLeft -= 200;
  };
  const handleNextBtn = () => {
    itemsDiv.current.scrollLeft += 200;
  };
  return (
    <div className="items-wrapper mt-2 position-relative">
      <div>Title</div>
      <button className="btn btn-success over-btn" onClick={handlePrevBtn}>
        prev
      </button>
      <button
        className="btn btn-success over-btn over-btn-right"
        onClick={handleNextBtn}
      >
        next
      </button>
      <div className="items-wrapper-imgs" ref={itemsDiv}>
        <img src={img5} alt="yoga" />
        <img src={img5} alt="yoga" />
        <img src={img5} alt="yoga" />
        <img src={img5} alt="yoga" />
        <img src={img5} alt="yoga" />
        <img src={img5} alt="yoga" />
        <img src={img5} alt="yoga" />
        <img src={img5} alt="yoga" />
        <img src={img5} alt="yoga" />
        <img src={img5} alt="yoga" />
        <img src={img5} alt="yoga" />
        <img src={img5} alt="yoga" />
       
      </div>
    </div>
  );
};

export default AboutPageImagesContainerComponent;
