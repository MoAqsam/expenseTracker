import React from "react";
import "./Dashboard.css";
import Card from "../Card/Card";

const Dashboard = () => {
    return (
        <aside id="Dashboard" className="Dashboard container-fluid">
            <div id="content">
                <div className="row">
                    <div className="col-sm-12">
                        <h1>Dashboard</h1>
                        <Card/>
                    </div>
                </div>
            </div>
        </aside>

    );
}

export default Dashboard;