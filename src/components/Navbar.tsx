import React from "react";
import { useHistory } from "react-router-dom";

function Navbar() {
  const history = useHistory();
  const handleLogOut = () => history.push("/login");

  return (
    <nav className='navbar'>
      <div>
        <p>MENU</p>
      </div>
      <button className='navbar-logout' onClick={handleLogOut}>
        Log Out
      </button>
    </nav>
  );
}

export default Navbar;
