/*
    producs:
        img = 123123
        title = 123123123
    card:
        props = {
            img:123123,
            title:123123123
        }
*/

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const CardItemComponent = ({ img, title, id, onDeleteItem }) => {
  const handleBtnClick = () => {
    onDeleteItem(id);
  };

  return (
    <div className="col">
      <div className="card card-width">
        <img src={img} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            Shop refrigerators at Best Buy. Add a new fridge to your home with
            our selection of French door refrigerators, mini fridges,
            counter-depth refrigerators & more.
          </p>
          <button className="btn btn-danger" onClick={handleBtnClick}>
            <FontAwesomeIcon icon={faTrashCan} />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItemComponent;
