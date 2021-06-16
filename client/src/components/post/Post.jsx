import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postimg"
        src="https://images.pexels.com/photos/2577706/pexels-photo-2577706.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
      />
      <div className="postinfo">
        <div className="postcategs">
          <span className="postcateg">Music</span>
          <span className="postcateg">Life</span>
        </div>
        <span className="posttitle">Amazon experience</span>
        <hr />
        <span className="postdate">1 hour ago</span>
      </div>
      <p className="postdescription">
        After much thought on how can I contribute to help with the current
        Covid Crisis in INDIA and at the same time help people in the community
        - I have decided to start a Covid Relief Fundraiser.
         After much thought on how can I contribute to help with the current
        Covid Crisis in INDIA and at the same time help people in the community
        - I have decided to start a Covid Relief Fundraiser.
        After much thought on how can I contribute to help with the current
        Covid Crisis in INDIA and at the same time help people in the community
        - I have decided to start a Covid Relief Fundraiser.
        After much thought on how can I contribute to help with the current
        Covid Crisis in INDIA and at the same time help people in the community
        - I have decided to start a Covid Relief Fundraiser.
      </p>
    </div>
  );
}
