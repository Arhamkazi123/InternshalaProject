import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Create.module.css";

const Create = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [isAgency, setIsAgency] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email format!");
      return;
    }

    // Phone number validation
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      alert("Invalid phone number format! (Should be 10 digits)");
      return;
    }

    // Basic validation
    if (!name.trim()) {
      alert("Name is required!");
      return;
    }

    if (!password.trim()) {
      alert("Password is required!");
      return;
    }

    if (!companyName.trim()) {
      alert("Company name is required!");
      return;
    }

    if (!isAgency) {
      alert("Please select if you are an agency!");
      return;
    }

    // Storing name and email in localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    navigate("/accountsettings");
  };

  return (
    <div className={styles["create-container"]}>
      <h1>Create your PopX Account</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles["form-group"]}>
          <label htmlFor="name">Name*</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="off"
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="off"
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="phone">Phone*</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            autoComplete="off"
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="password">Password*</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="off"
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="companyName">Company Name*</label>
          <input
            type="text"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
            autoComplete="off"
          />
        </div>
        <div className={styles["form-group"]}>
          <label>Are you an agency?*</label>
          <div className={styles["radio-container"]}>
            <input
              type="radio"
              id="yes"
              name="agency"
              value="yes"
              onChange={() => setIsAgency("yes")}
              required
            />
            <label htmlFor="yes">Yes</label>
            <input
              type="radio"
              id="no"
              name="agency"
              value="no"
              onChange={() => setIsAgency("no")}
              required
            />
            <label htmlFor="no">No</label>
          </div>
        </div>

        <button className={styles["button"]} type="submit">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Create;
