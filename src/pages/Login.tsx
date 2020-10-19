import React from "react";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    /* TODO: Handle login validation */

    e.preventDefault();
    history.push("/home");
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input placeholder='Ingrese el usuario'></input>
        <input placeholder='Ingrese la contraseña'></input>
        <button type='submit'>Iniciar sesion</button>
      </form>
    </div>
  );
}

export default Login;
