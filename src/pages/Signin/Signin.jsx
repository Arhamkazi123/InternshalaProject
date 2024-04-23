import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Signin.module.css";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 4;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("Invalid email format");
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError(
        "Password can never be less than 4 characters in length"
      );
      return;
    }

    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (storedEmail && storedEmail === email && storedPassword === password) {
      navigate("/accountsettings");
    } else {
      alert("Wrong email or password. Please try again.");
    }
  };

  return (
    <div className={styles["signin-container"]}>
      <h1 className={styles["signin-container__h1"]}>
        Sign in to your PopX account
      </h1>
      <p className={styles["signin-container__p"]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <form onSubmit={handleSubmit}>
        <div className={styles["form-group"]}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
            autoComplete="off"
            required
          />
          {emailError && <p className={styles["error-msg"]}>{emailError}</p>}
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError("");
            }}
            required
          />
          {passwordError && (
            <p className={styles["error-msg"]}>{passwordError}</p>
          )}
        </div>
        <button className={styles["signinbutn"]} type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Signin;
