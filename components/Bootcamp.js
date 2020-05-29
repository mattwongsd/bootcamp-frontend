import React from "react";

const Bootcamp = ({ bc: { name, description } }) => {
  return (
    <div>
      <div>
        {name} {description}
      </div>
    </div>
  );
};

export default Bootcamp;
