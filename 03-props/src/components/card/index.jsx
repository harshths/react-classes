import React from "react";
import Style from '../card/card.module.css';

const index = ({name, img, age}) => {
  return (
    <div className={Style.card}>
      <img src={img} alt={name} />
      <h1>{name}, {age}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero libero
        eaque totam. Illo, accusantium nemo!
      </p>
      <button>View Profile</button>
    </div>
  );
};

export default index;
