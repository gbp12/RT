import React from "react";
import useStore from "../../../localStorage/useStore";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { setUser } = useStore();
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      await setUser({
        userName: e.target[0].value,
        password: e.target[1].value,
      });
      alert("login exitoso");
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("login fallido");
    }
  };

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        height: "50vh",
        width: "100vw",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={(e) => login(e)}
      >
        <h3>Login</h3>
        <label>user</label>
        <input type="text" name="username" />
        <label>password</label>
        <input type="password" name="password" />
        <button type="submit">enviar</button>
      </form>
    </main>
  );
};

export default Login;
