import React from "react";
import HomeIcon from '@material-ui/icons/Home';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import NoteIcon from '@material-ui/icons/Note';
import "./Navbar.css";

function Navbar()
{
    return(
    <div className="navbar__body">
      <h3 className="brand">Personal Bank</h3>
        <div>
            <a href="http://localhost:3000/"><h3 className="h3__nav_items">Home</h3></a>
            <HomeIcon style={{ fontSize: 50 }}> </HomeIcon>
        </div>
        <div>
            <a href="#"><h3 className="h3__nav_items">About</h3></a>
            <PermIdentityIcon style={{ fontSize: 50 }} />
        </div>
        <div>
            <a href="#"><h3 className="h3__nav_items">FAQ</h3></a>
            <NoteIcon style={{ fontSize: 50 }} />
        </div>
    </div>
        
    );
}

export default Navbar;