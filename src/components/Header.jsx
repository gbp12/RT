import React from "react";
import styles from "../styles.module.css";
export const Header = () => {
  const clearJwt = () => {
    console.log("clearing jwt");
    localStorage.clear();
    window.location.replace("/login");
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.headerLogo}>RT</h1>
      <nav>
        <div>
          <a href="/">Home</a>
        </div>
        <div>
          <a href={`${window.location.origin}/profile`}>Profile</a>{" "}
        </div>
        <div onClick={clearJwt}>Log out</div>
      </nav>
    </header>
  );
};
