import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingswrapper">
        <div className="settingstitle">
          <span className="settingsupdatetitle">Update Your Account </span>
          <span className="settingsdeletetitle">Delete Account </span>
        </div>
        <form className="settingsform">
          <label>Profile Picture</label>
          <div className="settingspp">
            <img
              src="https://images.pexels.com/photos/3566226/pexels-photo-3566226.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileinput">
            <i className="settingsppicon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileinput" style={{display:"none"}} />

          </div>
          <label>Username</label>
          <input type="text" placeholder="Uddeshya" />
          <label>Email</label>
          <input type="email" placeholder="uddeshyapankaj14@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingssubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
