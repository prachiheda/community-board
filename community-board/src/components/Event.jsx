import React from "react";

const Event = (props) => {
  const handleClick = () => {
    window.location.href = props.buttonLink; // Redirect to the link specified in props
  };
  return (
    <div className="event-card">
      <td>
        <img src={props.imageLink} alt="Event" className="small-image" />
        <h5>{props.event}</h5>
        <h6>{props.type}</h6>
        <button onClick={handleClick}>Learn More</button>
      </td>
    </div>
  );
};

export default Event;
