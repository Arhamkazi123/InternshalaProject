import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Welcome.module.css";

const Welcome = () => {
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate("/createaccount");
  };

  const handleLogin = () => {
    navigate("/signin");
  };

  return (
    <div className={styles.welcomeContainer}>
      <h1 className={styles.welcomeTitle}>Welcome to Popx</h1>
      <p className={styles.welcomeText}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
      <button className={styles.createAccountBtn} onClick={handleCreate}>
        Create Account
      </button>
      <button className={styles.loginBtn} onClick={handleLogin}>
        Already registered? Log In
      </button>
    </div>
  );
};

export default Welcome;
