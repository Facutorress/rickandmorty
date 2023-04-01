import { useState } from "react";
import React from "react";
import validation from "./validation";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });
    validation({ ...userData, [property]: value }, errors, setErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={userData.username}
        onChange={handleInputChange}
      />
      <p>{errors.username}</p>

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={userData.password}
        onChange={handleInputChange}
      />

      <p>{errors.password}</p>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
