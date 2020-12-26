import React from "react";

import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";
import { deepPurple } from '@material-ui/core/colors'
import { useAsyncEffect } from "use-async-effect";

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import 'fontsource-roboto';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    }
  }
})

const useStyles = makeStyles((theme) => ({
  root: {

    height: '30vh',
    margin: theme.spacing(25, 40, 0),

  },
  image: {
    backgroundImage: 'url(https://i.pinimg.com/originals/e0/28/33/e0283351a077eab8fc9f86ca041502c0.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    overflowX: 'hidden',
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();
  const classes = useStyles();

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
    <ThemeProvider theme={theme}>
      <Grid container component="main" className={classes.root}>
        <Grid item xs={false} sm={7} md={4} className={classes.image} />
        <Grid item xs={2} sm={3} md={3} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Typography component="h1" variant="h3">
              Lumik
          </Typography>
            <Typography variant="h6" color="textSecondary">
              Voice-controlled virtual assistant
        </Typography>
            <Typography className={classes.txt} variant="h6" color="textSecondary">
              To start using Lumik please click the button below:
        </Typography>
            <Button onClick={() => { loginWithRedirect(); }}
              type="submit"
              variant="contained"
              color="primary"

              className={classes.submit}
            >
              Take me to login
            </Button>

          </div>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Login;
