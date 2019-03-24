import React,{Fragment} from "react";
import "./SideBar.css";

const SideBar = () => {
    return(
        <Fragment>        
        <nav id="sideNav">
            <span onClick={closeNav}>Hamburger</span>
            <ul>
                <li>Expense's</li>
                <li>Monthly Overview</li>                                
            </ul>
        </nav>
        <a onClick={openNav}>open</a>
        </Fragment>
    );
}

function openNav(){
    console.log("nav opened");
    document.getElementById("sideNav").style.display = "block";
}

function closeNav(){
    console.log("nav closed");
    document.getElementById("sideNav").style.display = "none";
}

export default SideBar;