import imgItem from "../../assets/imgs/item1.png";

const AmazonCardItemComponent = (props) => {
  return (
    <div className="card border-0">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <img src={imgItem} className="card-img-top" alt="item" />
        <a href="#">Go somewhere</a>
      </div>
    </div>
  );
};

export default AmazonCardItemComponent;
