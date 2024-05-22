import React from "react";

const OverviewCard = ({ className, data: { text, image, alt } }) => {
  return (
    <div className={`${className}`}>
      <div className="imgContainer">
        <img
          src={image}
          alt={alt}
        />
      </div>
      <div className="textContainer">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default OverviewCard;
