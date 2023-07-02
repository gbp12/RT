import React from "react";
import style from "../styles.module.css";
import axios from "axios";

export const UserForm = ({ user }) => {
  /* FIXME: modularizar control de formulario */

  /* FIXME: api control */
  const actualizarUsuario = async (e) => {
    e.preventDefault();
    var body = {
      id: user.id,
      username: e.target[0].value,
      useremail: e.target[1].value,
    };
    try {
      await axios.patch(`http://localhost:3000/api/v1/users`, body, {
        headers: {
          authorization: `${localStorage.getItem("jtw")}`,
        },
      });
      alert("Usuario actualizado");
      window.location.replace("/profile");
    } catch (error) {
      alert("Error al actualizar usuario");
    }
  };

  return (
    <>
      <form className={style.userForm} onSubmit={actualizarUsuario}>
        <label style={{ display: "flex", flexDirection: "column" }}>
          Name:
          <input
            className={style.userInput}
            type="text"
            name="name"
            defaultValue={user.username}
          />
        </label>
        <label style={{ display: "flex", flexDirection: "column" }}>
          Email:
          <input
            className={style.userInput}
            type="text"
            name="email"
            defaultValue={user.useremail}
          />
        </label>
        <button>Actualizar</button>
      </form>
    </>
  );
};
