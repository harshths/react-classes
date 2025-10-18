import React from "react";
import style from "../navbar/nav.module.css";

const index = () => {
  return (
    <nav className={style.nav}>
      <h3>NavBar</h3>
      <div className={style.items}>
        <li>Manu</li>
        <li>Home</li>
        <li>Edit</li>
      </div>
    </nav>
  );
};

export default index;
