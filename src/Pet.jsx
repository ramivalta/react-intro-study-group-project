import React from "react";
import PropTypes from "prop-types";

const Pet = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <span>{props.animal}, </span>
      <span>{props.breed}</span>
    </div>
  );
};


// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h3", {}, props.name),
//     React.createElement("span", {}, props.animal + ", "),
//     React.createElement("span", {}, props.breed),
//   ]);
// };

Pet.propTypes = {
  name: PropTypes.string.isRequired,
  animal: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
};

export default Pet;