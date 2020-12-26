import React from "react";
import { useHistory } from "react-router-dom";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      
    },
    title: {
      flexGrow: 1,
    },
  }),
);



function Navbar() {
  const history = useHistory();
  const handleLogOut = () => history.push("/login");
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <AppBar color="default" position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          LUMIK
        </Typography>
        <Button color="inherit"onClick={handleLogOut}>Log out</Button>
      </Toolbar>
    </AppBar>
  </div>
  
  );
}

export default Navbar;
{/* <nav className='navbar'>
<div>
  <p>MENU</p>
</div>
<button className='navbar-logout' onClick={handleLogOut}>
  Log Out
</button>
</nav> */}