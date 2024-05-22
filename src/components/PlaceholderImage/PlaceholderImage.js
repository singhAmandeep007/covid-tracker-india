import React from "react";
import { Placeholder } from "semantic-ui-react";

const PlaceholderImage = ({ num = 1, type = "square" }) => {
  let placeholderImages = Array.from(Array(num), (e, i) => {
    return (
      <div key={i}>
        <Placeholder.Image
          square={type === "square"}
          rectangular={type === "rectangular"}
        />
      </div>
    );
  });

  return <Placeholder fluid>{placeholderImages}</Placeholder>;
};
export default PlaceholderImage;
