import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebaritem">
        <span className="sidebartitle">ABOUT ME</span>
        <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        <p>
          Hi there! I am Uddeshya Pankaj. I am an Ethusiastic programmer, eager
          to learn new concepts and also apply them.
        </p>
      </div>
      <div className="sidebaritem">
        <span className="sidebartitle">CATEGORIES</span>
        <ul className="sidebarlist">
          <li className="sidebarlistitem">Life</li>
          <li className="sidebarlistitem">TechStack</li>
          <li className="sidebarlistitem">Music</li>
          <li className="sidebarlistitem">Style</li>
          <li className="sidebarlistitem">Sports</li>
          <li className="sidebarlistitem">Gaming</li>
        </ul>
      </div>
      <div className="sidebaritem">
        <span className="sidebartitle">FOLLOW US</span>
        <div className="sidebarsocial">
          <i className="sidebaricon fab fa-facebook"></i>
          <i className="sidebaricon fab fa-twitter-square"></i>
          <i className="sidebaricon fab fa-medium-m"></i>
          <i className="sidebaricon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
