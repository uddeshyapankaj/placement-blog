import "./topbar.css";

export default function Topbar() {
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
          <li className="toplistitem">HOME</li>
          <li className="toplistitem">ABOUT</li>
          <li className="toplistitem">CONTACT</li>
          <li className="toplistitem">WRITE</li>
          <li className="toplistitem">LOGOUT</li>
        </ul>
      </div>
      <div className="topright">
        <img
          className="topimage"
          src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        ></img>
        <i className="topsearchicon fas fa-search"></i>
      </div>
    </div>
  );
}
