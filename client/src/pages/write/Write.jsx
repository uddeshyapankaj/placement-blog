import "./write.css";

export default function Write() {
  return (
    <div className="write">
      <img
        src="https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        className="writeimg"
        alt=""
      />
      <form className="writeform">
        <div className="writeformgroup">
          <label htmlFor="fileinput">
            <i className=" writeicon fas fa-plus"></i>
          </label>
          <input type="file" id="fileinput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Company Name"
            className="writeinput"
            autoFocus={true}
          />
        </div>
        <div className="writeformgroup">
          <textarea
            placeholder="Tell Your Interview Experience here..."
            type="text"
            className="writeinput writetext"
          ></textarea>
        </div>
        <button className="writesubmit">Publish</button>
      </form>
    </div>
  );
}
