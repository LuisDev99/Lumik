import React from "react";
import { useHistory } from "react-router-dom";
// import { UserService } from "./../services/UserService";

import { useAuth0 } from "@auth0/auth0-react";
import { useAsyncEffect } from "use-async-effect";
import { UserService } from "../services/UserService";
import { useUserContext } from "../UserContext";
import { User } from "../models/User";
import Button from "@material-ui/core/Button";
import "fontsource-roboto";
import Typography from "@material-ui/core/Typography";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";
import { deepPurple } from "@material-ui/core/colors";
const imageBGDivStyle: React.CSSProperties = {
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  textAlign: "center",
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
  },
});

const useStyles = makeStyles(theme => ({
  root: {
    height: "30vh",
    margin: theme.spacing(25, 40, 0),
  },
  image: {
    backgroundImage:
      "url(https://i.pinimg.com/originals/e0/28/33/e0283351a077eab8fc9f86ca041502c0.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    overflowX: "hidden",
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  submit: {
    margin: theme.spacing(2, 0, 0),
  },
  txt: {
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    fontSize: 13,
    margin: theme.spacing(0, 6, 0),
  },
}));

function Login() {
  const history = useHistory();
  const { setUser } = useUserContext();

  const { loginWithRedirect, user, isAuthenticated } = useAuth0();
  const classes = useStyles();

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
    <ThemeProvider theme={theme}>
      <Grid container component='main' className={classes.root}>
        <Grid item xs={false} sm={7} md={4} className={classes.image} />
        <Grid item xs={2} sm={3} md={3} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Typography component='h1' variant='h3'>
              Lumik
            </Typography>
            <Typography variant='h6' color='textSecondary'>
              Voice-controlled virtual assistant
            </Typography>
            <Typography
              className={classes.txt}
              variant='h6'
              color='textSecondary'
            >
              To start using Lumik please click the button below:
            </Typography>

            <Button
              onClick={() => {
                loginWithRedirect();
              }}
              type='submit'
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              Take me to login
            </Button>
          </div>
        </Grid>
      </Grid>
    </ThemeProvider>

    // <div style={imageBGDivStyle}>
    //   <Card></Card>
    //   <LoginCard>
    //     <Typography variant="h5">
    //     Bienvenido a Lumik
    //     </Typography>
    //     <Button  size="small" variant="contained"
    //       onClick={() => {
    //         loginWithRedirect();
    //       }}
    //     >
    //       LOGIN
    //     </Button>
    //   </LoginCard>
    // </div>
  );
}

export default Login;
