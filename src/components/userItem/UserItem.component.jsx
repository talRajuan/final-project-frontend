import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const UserItemComponent = (props) => {
  const handleBtnClick = () => {
    props.onDeleteUser(props.id);
  };
  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
      key={props.id}
    >
      {props.name}
      <button className="btn btn-danger" onClick={handleBtnClick}>
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </li>
  );
};

export default UserItemComponent;
