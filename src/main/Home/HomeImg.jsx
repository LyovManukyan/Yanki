import React, { useEffect, useState } from "react";
import homeImg from "./images.json";
import styles from "./home.module.css";
import imgs from "./Images/BigImg.png";

function HomeImg() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    function getParameters() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", getParameters);
    return () => window.removeEventListener("resize", getParameters);
  }, []);
  return (
    <div className={styles["sect1"]}>
      <div className={styles["sect1-Bigimg"]}>
        {windowWidth <= 768 && (
          <div onClick={() => setDisplay(!display)}>
            <img src={imgs} alt="" />
          </div>
        )}
      </div>
      <div className={styles["sect1-img"]}>
        {(display || windowWidth >= 769) &&
          homeImg.map((item) => (
            <div key={item.id}>
              <img src={item.img} alt="" />
            </div>
          ))}
      </div>
    </div>
  );
}
export default HomeImg;
