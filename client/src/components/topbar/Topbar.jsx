import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const user = false;
  return (
    <div className="top">
      <div className="topleft">
        <i className="topicon fab fa-facebook"></i>
        <i className="topicon fab fa-twitter-square"></i>
        <i className="topicon fab fa-medium-m"></i>
        <i className="topicon fab fa-instagram-square"></i>
      </div>
      <div className="topcenter">
        <ul className="toplist">
          <li className="toplistitem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="toplistitem">
            {" "}
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="toplistitem">
            {" "}
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="toplistitem">
            {" "}
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="toplistitem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topright">
        {user ? (
          <img
            className="topimage"
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          ></img>
        ) : (
          <ul className="toplist">
          <li className="toplistitem">
            <Link className="link" to="/login">
              LOGIN
            </Link>
            </li>
            <li className="toplistitem">
            <Link className="link" to="/register">
              REGISTER
            </Link>
            </li>
          </ul>
        )}

        <i className="topsearchicon fas fa-search"></i>
      </div>
    </div>
  );
}
