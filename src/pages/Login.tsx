import React from "react";
import { useHistory } from "react-router-dom";
// import { UserService } from "./../services/UserService";

import { useAuth0 } from "@auth0/auth0-react";
import { useAsyncEffect } from "use-async-effect";
import { Button, LoginCard } from "./StyledComponents";
import { UserService } from "../services/UserService";
import { useUserContext } from "../UserContext";
import { User } from "../models/User";

const imageBGDivStyle: React.CSSProperties = {
  backgroundImage: `url(https://gyulchev.files.wordpress.com/2014/05/robot_blue.jpg)`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  textAlign: "center",
};

function Login() {
  const history = useHistory();
  const { setUser } = useUserContext();

  const { loginWithRedirect, user, isAuthenticated } = useAuth0();

  useAsyncEffect(async () => {
    function saveUserInContextAndRedirect(user: User) {
      setUser(user);

      // Redirect to the only page
      history.push("/home");
    }

    if (isAuthenticated && user) {
      const userService = new UserService();

      // Check if the user exists
      const userAccountResponse = await userService.fetchUserByEmail(
        user.email
      );

      if (
        userAccountResponse.data === null ||
        userAccountResponse.data === undefined ||
        userAccountResponse.data.email === undefined
      ) {
        // If reached here, it means that the user does not exists, so lets create one
        const newUser = await userService.createAccount({
          email: user.email,
          userName: user.nickname,
        });

        console.log({ newUser });
        saveUserInContextAndRedirect(newUser.data);
        return;
      }

      console.log({ userAccountResponse });
      saveUserInContextAndRedirect(userAccountResponse.data);
    }
  }, [isAuthenticated, user]);

  return (
    <div style={imageBGDivStyle}>
      <LoginCard>
        <h3>Bienvenido a Lumik</h3>
        <Button
          onClick={() => {
            loginWithRedirect();
          }}
        >
          LOGIN
        </Button>
      </LoginCard>
    </div>
  );
}

export default Login;
