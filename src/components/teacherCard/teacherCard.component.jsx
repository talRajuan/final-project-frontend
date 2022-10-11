const TeacherCardComponent = ({
  teacherName,
  teacherDescription,
  teacherImage,
  teacherPhone,
  classAddress,
  _id,
  onDelete,
  onEdit,
}) => {
  const handleDeleteBtnClick = () => {
    onDelete(_id);
  };
  const handleEditBtnClick = () => {
    onEdit(_id);
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
          <button
            className="card-link btn btn-warning"
            onClick={handleEditBtnClick}
          >
            Edit
          </button>
          <button
            className="card-link btn btn-danger"
            onClick={handleDeleteBtnClick}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default TeacherCardComponent;
