import React, { useEffect, useState } from "react";
import { FaCamera } from "react-icons/fa";
import styles from "./Account.module.css";

const Account = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedEmail = localStorage.getItem("email");

    const defaultImageUrl = "https://via.placeholder.com/150";

    setName(storedName || "Name Not Found");
    setEmail(storedEmail || "Email Not Found");
    setImageUrl(defaultImageUrl);
  }, []);

  return (
    <div className={styles["account-container"]}>
      <h2 className={styles["account-title"]}>Account Details</h2>
      <div className={styles["profile-section"]}>
        <div className={styles["image-wrapper"]}>
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile"
            className={styles["profile-image"]}
          />
          <span className={styles["camera-icon"]}>
            <FaCamera />
          </span>
        </div>
        <div className={styles["user-info"]}>
          <h1>{name}</h1>
          <p>Email: {email}</p>
        </div>
      </div>
      <div className={styles["account-details"]}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio itaque
          doloribus ullam modi voluptas odit...
        </p>
      </div>
    </div>
  );
};

export default Account;
