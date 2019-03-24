import React,{Fragment} from "react";
import "./SideBar.css";

const SideBar = () => {
    return(
        <Fragment>        
        <nav id="sideNav">            
            <ul>
                <li onClick={toggleSideNav}>X</li>
                <li>Dashboard</li>
                <li>Monthly Overview</li>                                
            </ul>
        </nav>
        <button onClick={toggleSideNav}  id="sideNavButton">></button>
        </Fragment>
    );
}
var toggle = false;

function toggleSideNav(){
    if(toggle){
        toggle = false;
        document.getElementById("sideNav").style.marginLeft = "-20%";
        document.getElementById("sideNavButton").style.display = "block";
        document.getElementById("content").style.marginLeft = "-20%";
    }else{
        toggle = true;
        document.getElementById("sideNav").style.marginLeft = "0";
        document.getElementById("sideNavButton").style.display = "none";
        document.getElementById("content").style.marginLeft = "-20%";
    }
}


export default SideBar;