import { Link } from "react-router-dom";

const ButtonMailToComponent = ({ email, children, ...rest }) => {
  return (
    <Link
      to="#"
      {...rest}
      onClick={(e) => {
        window.location.href = `mailto:${email}`;
        e.preventDefault();
      }}
    >
      {children}
    </Link>
  );
};

export default ButtonMailToComponent;
