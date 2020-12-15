import React from "react";
import { useHistory } from "react-router-dom";
import { UserService } from "./../services/UserService";

import { useAuth0 } from "@auth0/auth0-react";
import { useAsyncEffect } from "use-async-effect";
import { Button, LoginCard } from "./StyledComponents";

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
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();

  useAsyncEffect(async () => {
    if (isAuthenticated && user) {
      try {
        // Check if the player exists
        /**
         * TODO: Fetch if the user exists (UserService.fetchUserByEmail)
         */

        // Save the current user in the context
        /**
         * TODO: Use context API and store the user with his ID
         */

        // Redirect because now we are authorized
        history.push("/home");
      } catch (e) {
        // Backend will return 404 if the player does not have an account yet
        // If no account was found for this user, take him to register page for him to choose a character
        history.push("/login");
      }
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
