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
        document.getElementById("sideNav").style.marginLeft = "-200px";
        document.getElementById("sideNavButton").style.display = "block";
        document.getElementById("Dashboard").style.marginLeft = "0px";
   
    }else{
        toggle = true;
        document.getElementById("sideNav").style.marginLeft = "0";
        document.getElementById("sideNavButton").style.display = "none";
        document.getElementById("Dashboard").style.marginLeft = "200px";
    }
}


export default SideBar;