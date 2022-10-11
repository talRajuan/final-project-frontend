import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const userData = useSelector((state) => state.auth.userData);
  const history = useHistory();
  const [searchInput, setSearchInput] = useState("");
  const showLogin = () => {
    if (userData.email) {
      return (
        <Fragment>
         
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              {userData.email}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/logout">
              logout
            </NavLink>
          </li>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <li className="nav-item">
            <NavLink className="nav-link" to="/register">
              register
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/registerBusiness">
              business 
            </NavLink>
          </li>
        </Fragment>
      );
    }
  };

  const showBiz = () => {
    if (userData.biz === true) {
      return (
        <Fragment>
          <li className="nav-item">
            <NavLink className="nav-link" to="/createbizcard">
              Create biz card
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/dashboard">
              dashboard
            </NavLink>
          </li>
        </Fragment>
      );
    }
  };

  const searchInputChange = (ev) => {
    setSearchInput(ev.target.value);
  };

  const handleSearchSubmit = (ev) => {
    ev.preventDefault();
    history.push("/qparams?q=" + searchInput);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light mb-3  ${
        loggedIn ? "bg-success" : "bg-danger"
      }`}
    >
      <div className="container-fluid">
        {/* <NavLink className="navbar-brand" to="/">
          Navbar
        </NavLink> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
             <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>

            {showLogin()}
            {showBiz()}
          </ul>
          <form className="d-flex" onSubmit={handleSearchSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchInput}
              onChange={searchInputChange}
            />
            <button className="btn btn-warning">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
