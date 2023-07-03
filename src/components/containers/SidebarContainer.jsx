import React from "react";
import styles from "../../styles.module.css";
import { Outlet, Link } from "react-router-dom";
import useLogOut from "../../hooks/useLogOut";
const SidebarContainer = () => {
  const clearJwt = () => {
    useLogOut();
  };

  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.headerLogo}>RT</h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="profile">Profile</Link>
          <div onClick={clearJwt}>Log out</div>
        </nav>
      </header>
      <div style={{ width: "100%" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default SidebarContainer;
