import React,{Fragment} from "react";
import SideBar from './../components/SideBar/SideBar';
import Dashboard from './../components/Dashboard/Dashboard';
const MainContainer = () => {
    return(
        <Fragment>                        
            <SideBar/>
            <Dashboard/>
        </Fragment>
    );
}


export default MainContainer;