import React, { useState, useEffect } from "react";
import footerItems from "./footMenu.json";
import { NavLink } from "react-router-dom";
import styles from './footer.module.css'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Footer() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [id, setId] = useState(null);
  useEffect(() => {
    function getParametrers() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", getParametrers);
    return () => window.removeEventListener("resize", getParametrers);
  }, []);
  const handleToggle = (index) => {
    if (id === index) {
      return setId(null);
    }
    setId(index);
    };
    
  return (
    <div className={styles.footer}>
      <div className={windowWidth >= 769 ? `${styles.footer_firstChild}` : `${styles.footer_firstChild1}`}>
        {footerItems.map((item,index) => (
          <div key={item.id} className = {styles.ul_parent}  >
            <ul className={styles.footer_menu}>
              <li>
                <h2>
                  {item.headName}
                  {windowWidth <= 768 && (
                    <span onClick={() => handleToggle(index)}>
                      <KeyboardArrowDownIcon />
                    </span>
                  )}
                </h2>
              </li>
              {(id===index || windowWidth >= 769) &&
                item.a1.map((item) => (
                      <li key={item.id} >
                    {item?.path && item?.name ? (
                      <NavLink to={item?.path} key={item.id}>
                        {item?.name}
                      </NavLink>
                    ) : item?.path_link && item?.name ? (
                      <a key={item.id} href={item.path_link}>
                        {item.name}
                      </a>
                    ) : (
                      item.links.map((link) => (
                        <a key={link.id} href={link.path_link}>
                          <img src={link.img} alt="" />
                        </a>
                      ))
                    )}
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>
      <p>©️ 2021 Yanki. All rights reserved</p>
    </div>
  );
}