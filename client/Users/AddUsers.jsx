import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddUsers = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    // Crear objeto de usuario
    const user = {
      email: email,
      password: password,
    };

    // Enviar objeto de usuario al servidor
    axios.post("http://localhost:3000/api/users", user)
      .then((res) => {
        alert(res.data)
        console.log(res.data)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default AddUsers;
