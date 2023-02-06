import { useSelector } from "react-redux";
import "./teacherCard.component.css";

const TeacherCardTestComponent = ({
  teacherName,
  teacherDescription,
  teacherImage,
  teacherPhone,
  classAddress,
  _id,
  onDelete,
  onEdit,
  onShowMoreInfo,
  onEddToCart,
  isCartPage,
}) => {
  const userData = useSelector((state) => state.auth.userData);

  const handleDeleteBtnClick = () => {
    onDelete(_id);
  };

  const handleEditBtnClick = () => {
    onEdit(_id);
  };

  const handleShowMoreInfoClick = () => {
    onShowMoreInfo(_id);
  };

  const handleEddToCartClick = (ev) => {
    ev.preventDefault();
    onEddToCart(_id);
  };

  return (
    <div className="card">
      <img src={teacherImage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{teacherName}</h5>
        <p className="card-text">{teacherDescription}</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{teacherPhone}</li>
          <li className="list-group-item">{classAddress}</li>
        </ul>
        <div className="card-body">
          {userData.biz && !isCartPage && (
            <div className="row">
              <div className="col">
                <button
                  className="card-link btn btn-warning w-100"
                  onClick={handleEditBtnClick}
                >
                  Edit
                </button>
              </div>
              <div className="col">
                <button
                  className="card-link btn btn-danger w-100"
                  onClick={handleDeleteBtnClick}
                >
                  Delete
                </button>
              </div>
            </div>
          )}

          {!userData.biz && !isCartPage && (
            <div className="row">
              <div className="col">
                <button
                  className="card-link btn btn-warning w-100"
                  onClick={handleEddToCartClick}
                >
                  Add To Cart
                </button>
              </div>
              <div className="col">
                <button
                  className="card-link btn btn-danger w-100"
                  onClick={handleShowMoreInfoClick}
                >
                  More Info
                </button>
              </div>
            </div>
          )}

          {isCartPage && (
            <div className="row">
              <div className="col">
                <button
                  className="card-link btn btn-danger w-100"
                  onClick={handleDeleteBtnClick}
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeacherCardTestComponent;
